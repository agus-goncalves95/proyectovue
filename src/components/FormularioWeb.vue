<template> 
  <div class="container">
    <!-- @submit.prevent="onSbubmit" -->
    <form action="">
      <div class="row">
        <div class="col col-12">
          <h4>Formulario contacto</h4>
          <br><br>

           <!-- Input de Nombre -->
          <label for="inputNombre" class="text-start">Tu nombre</label>
          <input v-model="nombre" type="text" class="form-control" id="inputNombre" placeholder="Nombre completo">
          <p> Mi nombre es: {{ nombre }}</p>
          <br>

          <!-- Input de Edad -->
          <label for="inputEdad" class="form-label text-start">Edad</label>
          <input v-model.number="edad" type="number" class="form-control" id="inputEdad" placeholder="Edad">
         <p> Mi edad es : {{ edad }}</p>
          <br>

          <!-- input de email -->
          <label for="inputEmail" class="form-label text-start">Email</label>
          <input v-model="email" type="email" class="form-control" id="inputEmail" placeholder="tu@email.com">
         <p> Mi email : {{ email }}</p>
          <br>

         <!-- Select multiple de Estado -->
          <label  class="form-label text-start">Estado</label>
          <select class="form-select" aria-label="Default select example" v-model="estado">
          <option selected></option>
          <option value="1">Soltero/a</option>
          <option value="2">Casado/a</option>
          <option value="3">Divorciado/a/</option>
          </select>
          <p> Estado : {{ estado }} </p>
          <br>

          <!-- Select dinamico -->
          <!-- <label  class="form-label text-start">Pais</label>
          <select class="form-select" aria-label="Default select example" v-model="pais">
           <option v-for="pais in listaPaises" :key="pais.id" :value="pais.id"> {{ pais.pais }}</option>
          </select>
           <p> Pais: {{ pais.pais }}</p> -->
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
            <p> Lenguajes: {{ lenguajes }} </p>
          </div>
          <br>

            <!-- Campo de texto comentario -->
          <label for="areaComentarios" class="form-label text-start">Comentarios</label>
          <textarea class="form-control" id="areaComentarios" rows="3" v-model="comentarios"></textarea>
          <p> Esto es un comentario: {{ comentarios }}</p>
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
          <p> Tipo de documento: {{ documento }}</p>
          <hr>
          
          <div class="row">
            <br>
            <div class="col-10"></div>
            <br>
            <div class="col-2">
              <input type="submit" class="btn btn-primary" value="ENVIAR">
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
      nombre: " ",
      edad: " ",
      email: " ",
      lenguajes: [],
      comentarios: " ",
      estado: " ",
      documento: " ",
      listaPaises: [
         {
           id: 'A',
           pais: 'Argentina'
         },
         {
           id: 'B',
           pais: 'Uruguay'
         },
         {
           id: 'C',
           pais: 'Perú'
         },
         {
           id: 'D',
           pais: 'Colombia'
         }
       ]

    }
  },
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
