import tensorflowjs as tfjs
import keras

model = keras.models.load_model('Model/lstm_model_pls_work.h5')

tfjs.converters.save_keras_model(model, "./")