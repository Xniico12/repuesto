from flask import request, jsonify
from flask.views import MethodView
from db.cloudant.cloudant_manager import CloudantManager

cloud_manager = CloudantManager()


class Order(MethodView):
    def get(self, id_p):
        try:
            # Conexion a Cloudant
            cloud_manager.connect_service()
            my_db = cloud_manager.connect_db('health-db')
            if my_db == 'error':
                raise Exception
            # Falta agregar sincronizacion de las db
            user_result = cloud_manager.get_query_by(
                my_db, id_p, 'id_p')
            list_orders = []
            for result in user_result:
                try:
                    appointment_id = result['doc']['id_a']
                    orders = cloud_manager.get_query_by(
                        my_db, appointment_id, 'id_a')
                    for order in orders:
                        try:
                            order_id = order['doc']['id_o']
                            new_order = {
                                'id_o': order_id,
                                'id_a': appointment_id,
                                'diagnosis': order['doc']['diagnosis']
                            }
                            list_orders.append(new_order)
                        except:
                            pass
                except:
                    pass
            return jsonify({'st': 'ok', "orders": list_orders}), 200
        except:
            return jsonify({'st': 'error'}), 403
