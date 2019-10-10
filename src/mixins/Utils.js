export default {
    methods: {
        getExistingData() {
            const data = JSON.parse(localStorage.getItem('coordinates'));
            return data;
        },
        isEmpty(value) {
            return value === undefined || value === null || value === '';
        },
    }
}