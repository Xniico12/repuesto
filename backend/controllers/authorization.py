from flask import request, jsonify
from flask.views import MethodView
from db.cloudant.cloudant_manager import CloudantManager

cloud_manager = CloudantManager()


class Authorization(MethodView):
    def get(self, id_p):
        try:
            # Conexion a Cloudant
            cloud_manager.connect_service()
            my_db = cloud_manager.connect_db('health-db')
            if my_db == 'error':
                raise Exception
            # Falta agregar sincronizacion de las db
            # Ajustarlo para el paciente
            user_result = cloud_manager.get_query_by(
                my_db, id_p, 'id_p')
            list_auth = []
            for result in user_result:
                try:
                    appointment_id = result['doc']['id_a']
                    orders = cloud_manager.get_query_by(
                        my_db, appointment_id, 'id_a')
                    for order in orders:
                        try:
                            order_id = order['doc']['id_o']
                            authorizations = cloud_manager.get_query_by(
                                my_db, order_id, 'id_o')
                            for auth in authorizations:
                                try:
                                    authorization_doc = auth['doc']['id_auth']
                                    new_auth = {
                                        'id_auth': authorization_doc,
                                        'id_o': order_id,
                                        'file_a': auth['doc']['file_a']}
                                    list_auth.append(new_auth)
                                except:
                                    pass
                        except:
                            pass
                except:
                    pass
            return jsonify({'st': 'ok', "authorizations": list_auth}), 200
        except:
            return jsonify({'st': 'error'}), 403
