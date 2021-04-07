import React from 'react';

export default function Table(){
    return(
        <>
        <h1>Géneros</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id Genero</th>
              <th scope="col">Género</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td colspan="2">Larry the Bird</td>
            </tr>
          </tbody>
        </table>
        </>

    );
}