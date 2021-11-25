from modules import *


DATA_PATH = os.path.join('Feature_Extraction') 

# actions = np.array(['hello', 'thanks', 'iloveyou'])
actions = np.array(['Phone'])

number_sequences = 30
sequence_length = 20

for action in actions: 
    for sequence in range(60, number_sequences+60):
        try: 
            os.makedirs(os.path.join(DATA_PATH, action, str(sequence)))
        except:
            pass