import Table from '../Table'
import Form from '../Form'
import './style.css'

function Main(){
    return(
        
          <main className="content">
            <h2 id="inicio">Sobre mim</h2>
            <p>
                O Colégio Ulbra São Lucas, além de ofercer cursos de educação infantil e ensino médio, também oferece uma variedade de cursos de ensino profissional técnico, entre eles, o curso Técnico em Informática, com foco em programação.<br/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde id praesentium odit, totam commodi sit ex et. Quisquam facere laboriosam libero similique alias temporibus nemo voluptatum, placeat accusamus suscipit.<br/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde id praesentium odit, totam commodi sit ex et. Quisquam facere laboriosam libero similique alias temporibus nemo voluptatum, placeat accusamus suscipit.<br/>
            </p>

            <h2 id="carreira">Minha Carreira</h2>
            <p>
                Adicione aqui detalhes sobre sua carreira e estudos.<br/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde id praesentium odit, totam commodi sit ex et. Quisquam facere laboriosam libero similique alias temporibus nemo voluptatum, placeat accusamus suscipit.<br/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde id praesentium odit, totam commodi sit ex et. Quisquam facere laboriosam libero similique alias temporibus nemo voluptatum, placeat accusamus suscipit.<br/>
            </p>

            <h2>Como posso te ajudar?</h2>
            <Table/>
            <Form/>
           

         
        </main>
    )
}

export default Main