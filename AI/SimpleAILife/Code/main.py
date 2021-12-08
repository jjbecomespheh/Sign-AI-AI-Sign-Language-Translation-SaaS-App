import numpy as np
import base64
import io
from flask_socketio import SocketIO, emit
from flask import Flask
from PIL import Image
from flask import Flask
import sys
from modules import *
from MP_holistic_styled_landmarks import mp_holistic,draw_styled_landmarks
from mediapipe_detection import mediapipe_detection
from keypoints_extraction import extract_keypoints
import keras
from folder_setup import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['Access-Control-Allow-Origin'] = '*'
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app,resources={r"*": {"origins": "*"}})

model = keras.models.load_model('Model/lstm_model_pls_work.h5')
sequence = []
sentence = []
threshold = 0.8

# @app.route('/display')
# # ‘/’ URL is bound with hello_world() function.
# def hello_world():
#     return '<h1>Hello World</h1>'
 

@socketio.on('image')
def image(data_image):
    global sequence
    global sentence
    global threshold
    with mp_holistic.Holistic(min_detection_confidence=0.5, min_tracking_confidence=0.5) as holistic:
        sbuf = io.StringIO()
        sbuf.write(data_image)
        # print(data_image, file=sys.stdout, flush=True)

        # decode and convert into image
        b = io.BytesIO(base64.b64decode(data_image))
        pimg = Image.open(b)
        # pimg.show()
        # print(pimg, file=sys.stdout, flush=True)
        # print(np.ndarray(pimg), file=sys.stdout, flush=True)
        image, results = mediapipe_detection(np.asarray(pimg), holistic)
        # print(results, file=sys.stdout, flush=True)
        draw_styled_landmarks(image, results)

        keypoints = extract_keypoints(results)
        # print(keypoints, file=sys.stdout, flush=True)
        sequence.append(keypoints)
        sequence = sequence[-20:]
        print(f"Len: {len(sequence)}", file=sys.stdout, flush=True)
        # print("len is ", len(sequence))
        if len(sequence) == 20:
            res = model.predict(np.expand_dims(sequence, axis=0))[0]
            # print(r)
            print(f"Prediction:{actions[np.argmax(res)]}", file=sys.stdout, flush=True)
            # print(threshold)
            # print(threshold<np.argmax(res))
            if res[np.argmax(res)] > threshold: 
                if len(sentence) > 0: 
                    if actions[np.argmax(res)] != sentence[-1]:
                        sentence.append(actions[np.argmax(res)])
                else:
                    sentence.append(actions[np.argmax(res)])
            emit('prediction', actions[np.argmax(res)])

            if len(sentence) > 5: 
                sentence = sentence[-5:]

            print(f"Sentence: {sentence}", file=sys.stdout, flush=True)
            # image = prob_viz(res, actions, image, colors)
            # imgencode = cv2.imencode('.jpg', image)[1]

            # # base64 encode
            # stringData = base64.b64encode(imgencode).decode('utf-8')
            # b64_src = 'data:image/jpg;base64,'
            # stringData = b64_src + stringData  

            # # emit the frame back
            # emit('response_back', stringData)

    ## converting RGB to BGR, as opencv standards
    # frame = cv2.cvtColor(np.array(pimg), cv2.COLOR_RGB2BGR)

    # # Process the image frame
    # frame = imutils.resize(frame, width=700)
    # frame = cv2.flip(frame, 1)
    

if __name__ == "__main__":
    app.run(debug=True)