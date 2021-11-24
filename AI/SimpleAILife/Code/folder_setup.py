from modules import *


DATA_PATH = os.path.join('Feature_Extraction') 

actions = np.array(['ran']) # 'he', 'rob', 'wearing','black', 'jacket','1.8m', "ran", "towards","train"])

number_sequences = 20
sequence_length = 30

for action in actions: 
    for sequence in range(number_sequences):
        try: 
            os.makedirs(os.path.join(DATA_PATH, action, str(sequence)))
        except:
            pass