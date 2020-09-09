import React from 'react';
import Pic from '../images/DSC_0022-2.jpg';
import '../scss/about.scss';


function About() {
  return (
    <div className="About">
      <div className="AboutPic" style={{ backgroundImage:`url(${Pic})` }}>
      </div>
      <div className="AboutInfo">
          <div className="AboutInfoTitle">
            <h1>À PROPOS</h1>
          </div>
          <div className="AboutInfoText">
            <p>Bonjour, je m'appelle Geoffrey, j'ai 35 ans et je suis passionné par la photographie et l'informatique.</p>
            <p>Le développement web me permet aujourd'hui de mêler ces deux passions avec un certain goût pour le design.</p>
            <p>Après un an de formation à l'Ecole Régionale du Numérique de St-Gaudens, j'ai obtenu le titre professionnel de développeur web et web mobile de niveau III (bac +2).</p>
            <p>J'ai ensuite effectué un stage de six mois au sein de l'entreprise Cloub Technologies, où j'ai pu continuer à me former et développer la partie front-end de leur application sur React.js.</p> 
            <p>Actuellement à la recherche d'un premier emploi orienté front-end, je suis motivé à continuer mon apprentissage en ce sens, tout en étant ouvert à toutes technologies nouvelles qui pourraient m'apporter plus d'expérience dans mon métier.</p>
            <p >Autodidacte, curieux et rigoureux, je peux facilement m'adapter à toutes les situations.</p>
            <div className="AboutFormation">
              <h2>Formation</h2>
              <div className="AboutFormationInfo">
                <p>Ecole Régionale du Numérique 2018 - 2019</p>
                <p>Organisme : <a href="https://occitanie.simplon.co" target="_blank" aria-label="Simplon" rel="noopener noreferrer">Simplon Occitanie</a>, Saint-Gaudens</p>
                <p>Stage : <a href="https://www.cloub.pro/" target="_blank" aria-label="Cloub" rel="noopener noreferrer">Cloub Technologies</a>, Paris</p>
                <p>Titre Professionnel : Développeur web et web mobile</p>
                <p>Niveau : III (bac+2)</p>
                <p>Obtenu : Le 01 Avril 2019</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
