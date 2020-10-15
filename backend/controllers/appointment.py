from flask.views import MethodView
from flask import request, jsonify
from db.cloudant.cloudant_manager import CloudantManager 
from validators.appointment_val import AppointmentVal

cm = CloudantManager()
appointment_schema = AppointmentVal()

class Appointment(MethodView):
    def post(self):
        try:
            appointment = request.get_json()
            errors = appointment_schema.validate(appointment)
            if errors:
                return jsonify({'st':errors})
            conn = cm.connect_service()
            my_db = cm.connect_db('health-db')
            print("aaa")
            if my_db == 'error':
                raise Exception
            doc_msg = cm.add_doc(my_db, appointment)
            if doc_msg == "ok":
                return jsonify({'st': 'ok'})
            elif doc_msg == "error":
                return jsonify({'st': 'error'})

        except:
            return jsonify({'st':"error en todo"}), 403
            