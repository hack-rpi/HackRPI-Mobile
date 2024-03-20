import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import random
import string

# initialize the path to firebase
cred = credentials.Certificate("Py_Key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# add 100 users with random Uid and Pass
number_C = string.ascii_letters + string.digits
for i in range(100):
    user_number = str(i+1)
    doc_ref = db.collection('users').document("User"+user_number)
    Uid = ''.join(random.choice(number_C) for i in range(8))
    Pass = ''.join(random.choice(number_C) for i in range(8))
    doc_ref.set({
        'Uid': Uid,
        'Pass': Pass
    })