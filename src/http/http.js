export class Http {  
    static fetchData(url) {
      return fetch(url)
        .then(response => response.json())
        .then(data => data.proteins)
        .catch(err => console.log(err))
    }

    static fetchDataInstructors(url) {
      return fetch(url)
        .then(response => response.json())
        .then(data => data.Coaches)
        .catch(err => console.log(err))
    }
}
  