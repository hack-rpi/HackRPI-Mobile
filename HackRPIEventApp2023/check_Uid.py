import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("Py_Key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

Uids = {}
for i in range(100):
    user_number = str(i+1)
    doc_ref = db.collection('users').document("User"+user_number)
    doc = doc_ref.get()
    temp = doc.to_dict()['Uid']
    if temp in Uids:
        Uids[temp] += 1
    else:
        Uids[temp] = 1
print(Uids)
