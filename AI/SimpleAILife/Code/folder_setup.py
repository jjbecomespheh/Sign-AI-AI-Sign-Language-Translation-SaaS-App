from modules import *


DATA_PATH = os.path.join('Feature_Extraction') 
print(DATA_PATH)
actions = actions = np.array(["Someone", "robbed","me", "Yes","Black", "Money"])

number_sequences = 90
sequence_length = 20

for action in actions: 
    for sequence in range(number_sequences):
        try: 
            os.makedirs(os.path.join(DATA_PATH, action, str(sequence)))
        except:
            pass