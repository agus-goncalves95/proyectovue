<template> 
  <div class="container p-4">
    <p>Seccion de tabla</p>
      <div v-for="(persona,i) in personas" :key="i">
       <p> {{ persona.nombre }} </p>
       <p> {{ persona.edad }} </p>
       <p> {{ persona.email}} </p>
     </div>
    <!-- @submit.prevent="onSbubmit" -->
    <form action="">
      <div class="row">
        <div class="col col-12">
          <h4>Formulario contacto</h4>
          <br>

           <!-- Input de Nombre -->
          <label for="inputNombre" class="text-start">Tu nombre</label>
          <input v-model="inputNombre" type="text" class="form-control" id="inputNombre" placeholder="Nombre completo" required>
              <div class="valid-feedback">
              Looks good!
            </div>
          <br>

          <!-- Input de Edad -->
          <label for="inputEdad" class="form-label text-start">Edad</label>
          <input v-model.number="inputEdad" type="number" class="form-control" id="inputEdad" placeholder="Edad" required>
          <br>

          <!-- input de email -->
          <label for="inputEmail" class="form-label text-start">Email</label>
          <input v-model="inputEmail" type="email" class="form-control" id="inputEmail" placeholder="tu@email.com" required>
          <br>

         <!-- Select multiple de Estado -->
          <label  class="form-label text-start">Estado</label>
          <select class="form-select" aria-label="Default select example" v-model="estado">
          <option selected></option>
          <option value="1">Soltero/a</option>
          <option value="2">Casado/a</option>
          <option value="3">Divorciado/a/</option>
          </select>
          <br>

            <!-- Checkbox lenguajes -->
          <div class="row">
            <h4>Selecciona tu curso</h4>
            <div class="col col-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="javascript" id="checkJS" v-model="lenguajes">
                <label class="form-check-label" for="checkJS">
                  JavaScript
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="react" id="checkReact"  v-model="lenguajes"> 
                <label class="form-check-label" for="checkReact">
                  React
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="angular" id="checkNg"  v-model="lenguajes">
                <label class="form-check-label text-start" for="checkNg">
                  Angular
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="vue" id="checkVue"  v-model="lenguajes">
                <label class="form-check-label" for="checkVue">
                  Vue
                </label>
              </div>
            </div>
          </div>
          <br>

            <!-- Campo de texto comentario -->
          <label for="areaComentarios" class="form-label text-start">Comentarios</label>
          <textarea class="form-control" id="areaComentarios" rows="3" v-model="comentarios"></textarea>
          <br>

          <div class="row">
            <h4>Tipo de documento</h4>
            <div class="col">
              <input type="radio" name="checkDNI" class="form-check-input" value="Dni" v-model="documento">
              <label for="checkDNI">DNI</label>
            </div>
            <div class="col">
              <input type="radio" name="checkPass" class="form-check-input" value="Pasaporte" v-model="documento">
              <label for="checkDNI">Pasaporte</label>
            </div>
            <div class="col">
              <input type="radio" name="checkVisa" class="form-check-input" value="Visa" v-model="documento">
              <label for="checkDNI">VISA</label>
            </div>
          </div>
          <hr>
          
          <div class="row">
            <br>
            <div class="col-10"></div>
            <br>
              <div class="col-12">
                <button @click="agregarATabla()" class="btn btn-primary" >Enviar formulario</button>
              </div>

            <br>
          </div>
        </div>
      </div>
    </form>
  </div>




</template>

<script>
export default {
  name: 'FormularioWeb',
  data() {
    return {
      inputNombre: "",
      inputEdad: "",
      inputEmail: "",
      lenguajes: [],
      comentarios: "",
      estado: "",
      documento: "",
      personas: []
    }
  },
  methods: {
    agregarATabla(){
        const newPersona = {
          nombre: this.inputNombre,
          edad: this.inputEdad,
          email: this.inputEmail,
        }
       this.personas.push(newPersona); 
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
.container{
  max-width: 700px;
}
</style>
