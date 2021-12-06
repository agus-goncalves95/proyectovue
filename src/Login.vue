<template>
    <div>
        <div class="row">
            <div class="col-6">
                <img class="img-login"
                    src="https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80" />
            </div>
            <div class="col container-form">
                <h3>Login</h3>
                <p>Complete los campos para iniciar sesion</p>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Direccion de Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <vs-button type="submit" size="large">Iniciar Sesion</vs-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .img-login {
        width: 100%;
    }
    .container-form{
        padding: 200px 100px;
    }

</style>