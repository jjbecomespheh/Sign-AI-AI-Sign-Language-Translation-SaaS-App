from modules import *



colors = [(255,0,0), (0,255,0), (0,0,255),(23,49,43),(67,69,4), (100,155,0), (100,0,255),(23,90,255), (34,53,21)]


def prob_viz(res, actions, input_frame, colors):
    output_frame = input_frame.copy()
    print(actions)
    print(len(res))
    for num, prob in enumerate(res):
        cv2.rectangle(output_frame, (0,60+num*40), (int(prob*100), 90+num*40), colors[num], -1)
        print(f"{actions[num]}:{prob}")
        cv2.putText(output_frame, actions[num], (0, 85+num*40), cv2.FONT_HERSHEY_SIMPLEX, 0.1, (255,255,255), 1, cv2.LINE_AA)
        
    return output_frame