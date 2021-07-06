const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'hola soy joan',
        contador: 0
    },
    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join('');
        }
    }
});