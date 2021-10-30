

from flask import Flask,render_template, jsonify,json,request,redirect
from flask_login import LoginManager,current_user,login_user,login_required
from flask_cors import CORS,cross_origin
from catalogo import Catalogo
from Usuario import Usuario,login
from Users import *

app=Flask(__name__,static_folder='./dist',template_folder='./dist')
#app=Flask(__name__)
CORS(app, resources={r'*':{'origins': '*'}},CORS_SUPPORTS_CREDENTIALS=True)
app.config['SECRET_KEY']='3i-IdbODscH0yR4WFu_yvZppB76hh5I'
@app.route('/',defaults={'path':''})
@app.route('/<path:path>')
def render_vue(path):
    return render_template('index.html')



login.init_app(app)
login.login_view='/'
    
@app.route('/loginapi',methods=['GET','POST']) #listo
def login():
    response_object = {'status': 'success'}
    if request.method == 'POST':
        post_data=request.get_json()
        correo=post_data.get('correo')
        contrasena=post_data.get('contrasena')
        usuario=Usuario(correo,contrasena)
        print(correo, contrasena, usuario)
        if usuario is not None and usuario.verif_cont(contrasena) :
            admin=usuario.get_usuario(correo)
            if admin[4]==1:
                login_user(usuario)
                response_object['message']='sí'
            else:
                response_object['message']='no'
            login_user(usuario)
        #response.headers.add('Access-Control-Allow-Origin', '*')
        else:
            response_object['message']='no existe'
        return jsonify(response_object)
@app.route('/registerapi', methods=['GET','POST']) #listo
def register():
    response_object = {'status': 'success'}
    if request.method == 'POST' :
        post_data=request.get_json()
        correo=post_data.get('correo')
        contrasena=post_data.get('contrasena')
        if Usuario.get_usuario(correo) is not None:
            response_object['message']='Este correo ya está registrado'
        else:
            user=Usuario(correo,contrasena)
            user.set_usuario(user.get_ID,user.get_correo,user.get_pass,0)
            response_object['message']='Registrado correctamente'
        return jsonify(response_object)

@app.route('/catalogo',methods=['GET']) #listo
def get_catalogo():
    cata=Catalogo().get_catalogo()
    print(cata)
    return jsonify(cata)

@app.route('/catalogo1',methods=['POST']) #listo
def insertar_producto():
    detalles=request.get_json()
    nombre=detalles['title']
    precio=detalles['precio']
    calificacion=detalles['calificacion']
    imagen=detalles['thumbnailUrl']
    resultado=Catalogo().insertar_producto(nombre,precio,calificacion,imagen)
    return jsonify(resultado)

@app.route('/catalogo1',methods=['PUT']) #listo
def actualizar_producto():
    detalles=request.get_json()
    print(detalles)
    ID=detalles['id']
    nombre=detalles['title']
    precio=detalles['precio']
    calificacion=detalles['calificacion']
    imagen=detalles['thumbnailUrl']
    resultado=Catalogo().actualizar_producto(ID,nombre,precio,calificacion,imagen)
    return jsonify(resultado)

@app.route('/catalogo1/<ID>',methods=['GET', 'DELETE']) #listo
def get_por_id(ID):
    print("entra")
    if request.method == 'GET':
        resultado=Catalogo().get_por_id(ID)
        print(resultado)
        return jsonify(resultado)
    if request.method == 'DELETE':
        resultado=Catalogo().borrar_producto(ID)
        print(resultado)
        return jsonify(resultado)
@app.route('/comentar',methods=['GET','POST','DELETE'])
def comentar():
    data=request.get_json()
    if request.method=='POST':
        comentario=data.get('comentario')
        nombre_producto=data.get('id_producto')
        guser=current_user.get_id()
        Usuario.comentar(comentario,guser,nombre_producto)
    elif request.method=='DELETE':
        comentario=request.get('comentario')
        Usuario.borrar_comentario(comentario)
    elif request.method=='GET':
        comentario=request.get('comentario')
@app.route('/comentar/<comentario>',methods=['GET','POST'])
def editar(comentario):
    comentario_nuevo=request.get()
    Usuario.editar_comentario(comentario,comentario_nuevo)