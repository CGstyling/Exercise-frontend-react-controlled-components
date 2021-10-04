import React from 'react';
import './App.css';

function App() {
  const [formName, setFormName] = React.useState('');
  const [formAge, setFormAge] = React.useState(0);
  const [formNewsletter, setFormNewsletter] = React.useState(false);
  const [formComments, setFormComments] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formComments, formNewsletter, formAge, formName);
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Gegevens</legend>
            <label htmlFor="Details-name">
              naam:
              <input
                  type="text"
                  name="name"
                  id="details-name"
                  value={formName}
                  onChange={(event) => setFormName(event.target.value)}
              />
            </label>
            <label htmlFor="details-age">
              Leeftijd:
              <input
                  type="number"
                  name="age"
                  id="details-age"
                  value={formAge}
                  onChange={(event)=>setFormAge(event.target.value)}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Jouw revieuw</legend>
            <label htmlFor="recipe-comments">
              Opmerkingen:
              <textarea
                  name="recipe-comments"
                  id="recipe-comments"
                  cols="20"
                  rows="5"
                  placeholder="Wat vond je van het recept?"
                  value={formComments}
                  onChange={(event) =>setFormComments(event.target.value)}
              >
              </textarea>
            </label>

            <label htmlFor="recipe-newsletter">
              <input
                  type="checkbox"
                  name="newsletter"
                  checked={formNewsletter}
                  onChange={()=>setFormNewsletter(!formNewsletter)}
              />
              Ik schrijf mij in voor de nieuwsbrief
            </label>

            <button type="submit">versturen</button>
          </fieldset>
        </form>
        </>
  );
}

export default App;
