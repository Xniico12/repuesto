from flask.views import MethodView
from flask import request, jsonify
from helpers.crypt import Crypt
from validators.patient_val import PatientSignin
from db.cloudant.cloudant_manager import CloudantManager

patient_schema = PatientSignin()
cm = CloudantManager()
crypt = Crypt()


class Signin(MethodView):
    def post(self):
        try:
            patient_signin = request.get_json()
            if patient_signin['role_p'] == "2":
                conn = cm.connect_service()
                my_db = cm.connect_db('health-db')
                if my_db == 'error':
                    raise Exception
                docs = cm.get_query_by(
                    my_db, patient_signin['mail_p'], 'mail_p')
                if docs != []:
                    return jsonify({'st': "existe"})
                patient_signin['password_p'] = crypt.hash_string(
                    patient_signin['password_p'])
                doc_msg = cm.add_doc(my_db, patient_signin)
                disconnect = cm.disconnect_db('health-db')
                if doc_msg == "ok":
                    return jsonify({'st': 'ok'}), 200
                elif doc_msg == "error":
                    return jsonify({'st': 'error'}), 403
        except:
            if patient_signin['role_d'] == "1":
                conn = cm.connect_service()
                my_db = cm.connect_db('health-db')
                if my_db == 'error':
                    raise Exception
                docs = cm.get_query_by(
                    my_db, patient_signin['mail_d'], 'mail_d')
                if docs != []:
                    return jsonify({'st': "existe"})
                patient_signin['password_d'] = crypt.hash_string(
                    patient_signin['password_d'])
                doc_msg = cm.add_doc(my_db, patient_signin)
                disconnect = cm.disconnect_db('health-db')
                if doc_msg == "ok":
                    return jsonify({'st': 'ok'}), 200
                elif doc_msg == "error":
                    return jsonify({'st': 'error'}), 403
        finally:
            print("hola")
            return jsonify({'st': 'error'})
