const Mongoose= require ("mongoose");


const UserRegisterSchema = Mongoose.Schema({
    dui: String,
    nombre: String,
    correo: String,
    direccion: String,
    fecha_nac: Date,
    card: String,
    contraseña: String
});

module.exports = Mongoose.model("usuario", UserRegisterSchema);

const AdminSchema = Mongoose.Schema({
    nombre: String,
    correo: String,
    contraseña: String
});

module.exports = Mongoose.model("administrador", AdminSchema);

const EmployeeSchema = Mongoose.Schema({
    nombre: String,
    correo: String,
    contraseña: String
});

module.exports = Mongoose.model("empleado", EmployeeSchema);

/*
function AbstractEntitySchema() {   
    //call super        
    Schema.apply(this, arguments);     
    //add                                     
    this.add({                              
        entityName: {type: String, required: false},
        timestamp: {type: Date, default: Date.now},
        index: {type: Number, required: false},
        objectID: {type: String},
        id: {type: String}
    });                                     
};
util.inherits(AbstractEntitySchema, Schema);

//Message Schema
var MessageSchema = new AbstractEntitySchema();
MessageSchema.add({
    text: {type: String, required: true},
    author: {type: String, required: true},
    type: {type: String, required: false}
});

//Room Schema
var RoomSchema = new AbstractEntitySchema();
RoomSchema.add({
    name: {type: String, required: true},
    author: {type: String, required: false},
    messages : [MessageSchema],
});

var Message = mongoose.model('Message', MessageSchema);
var Room = mongoose.model('Room', RoomSchema);

// save data to Message and Room

var aMessage = new Message({
     entityName: 'message',
     text: 'Hello',
     author: 'mmj',
     type: 'article'
    });

 var aRoom = new Room({
     entityName: 'room',
     name: 'Room1',
     author: 'mmj',
     type: 'article'
 });

 aRoom.save(function(err, myRoom) { 
    if (err)
        console.log(err);
    else                                  
        console.log("room is saved"); 
 });

 aMessage.save(function(err) {
    if (err)
        console.log(err);
    else
        console.log('user is saved');
 }); */