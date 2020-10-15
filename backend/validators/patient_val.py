from marshmallow import validate, fields, Schema, validates, ValidationError


class PatientSignin(Schema):

    id_p = fields.Str(required=True, validate=validate.Length(min=6, max=20))
    name_p = fields.Str(required=True, validate=validate.Length(min=3, max=20))
    mail_p = fields.Str(
        required=True, validate=validate.Length(min=10, max=45))
    phone = fields.Str(required=True, validate=validate.Length(min=7, max=10))
    password_p = fields.Str(
        required=True, validate=validate.Length(min=8, max=20))

    age = fields.Int(required=True, validate=validate.Range(min=18))
    role_p = fields.Str(required=True, validate=validate.Equal("2"))
