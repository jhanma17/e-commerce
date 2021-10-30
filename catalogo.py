import sqlite3

class Catalogo():
    Base_catalogo='base_datos.sqlite'
    def __init__(self):

        self.bd=self.Base_catalogo
    def get_bd(self):
        conn=sqlite3.connect(self.Base_catalogo)
        return conn
    
    
    def crear_tabla(self):
        tablas=['''CREATE TABLE IF NOT EXISTS catalogo(
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
				precio REAL NOT NULL,
				calificacion REAL NOT NULL)
                ''']
        bd=self.get_bd()
        cursor=bd.cursor()
        for tabla in tablas:
            cursor.execute(tabla)
        return tablas
    
    def insertar_producto(self,nombre,precio,calificacion,imagen):
        bd=self.get_bd()
        cursor=bd.cursor()
        sentencia='INSERT INTO catalogo(nombre,precio,calificacion,imagen)VALUES (?,?,?,?)'
        cursor.execute(sentencia,[nombre,precio,calificacion,imagen])
        bd.commit()
        return True
    
    def actualizar_producto(self,ID,nombre,precio,calificacion,imagen):
        bd=self.get_bd()
        cursor=bd.cursor()
        sentencia='UPDATE catalogo SET nombre=?,precio = ?,calificacion =?, imagen =? WHERE ID = ?'
        cursor.execute(sentencia,[nombre,precio,calificacion,imagen,ID])
        bd.commit()
        return True
    def borrar_producto(self,ID):
        bd = self.get_bd()
        cursor = bd.cursor()
        sentencia = "DELETE FROM catalogo WHERE ID = ?"
        cursor.execute(sentencia, [ID])
        bd.commit()
        return True
    
    def get_por_id(self,ID):
        bd = self.get_bd()
        cursor = bd.cursor()
        sentencia = "SELECT ID, nombre, precio, calificacion, imagen FROM catalogo WHERE ID = ?"
        cursor.execute(sentencia, [ID])
        return cursor.fetchone()
    def get_by_name(self,nombre):
        bd = self.get_bd()
        cursor = bd.cursor()
        sentencia = "SELECT ID, nombre, precio, calificacion FROM catalogo WHERE nombre = ?"
        cursor.execute(sentencia, [nombre])
        return cursor.fetchone()
    def get_catalogo(self):
        bd=self.get_bd()
        cursor=bd.cursor()
        peticion='SELECT ID,nombre,precio,calificacion, imagen FROM catalogo'
        cursor.execute(peticion)
        return cursor.fetchall()    
    