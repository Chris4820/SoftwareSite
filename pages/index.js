import React from 'react'
import emailjs from 'emailjs-com';
import {Helmet} from 'react-helmet';
import IMG from 'next/image';
import BasedeDados from '../logos/basededados/database.png'
import Gerenciamento from '../logos/gestao/2.png'
import Mensalidade from '../logos/mensalidade/mensalidade2.png'

export default function Home() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_g2fh2sp', 'template_zurf6ym', e.target, 'user_2nFVcObpoyRdHPGqFgMc4')
          .then((result) => {
              alert('Mensagem enviada com sucesso')
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return(
        <div>
             <Helmet>
                 <title>SoftwareSite</title>
             </Helmet>
            <div className='fodasse'>
                <div className='fodasse1'>
                <h1>SoftwareSite</h1>
                <div className='fodasse2'>
                    <p>Crie sua empresa com a nossa segurança</p>
                    <p>O seu futuro, <strong>começa aqui!</strong></p>
                    <button className='btncontact'>Contacte-nos</button>
                </div>
                </div>
            
             
            </div>
            <div className="principal">
						<div className="imagem">
							 <IMG src={Gerenciamento}></IMG>
						</div>
						<div className="texto">
							<strong className="titulotexto">Fácil Gerenciamento</strong>
							<p>Software feito para todos, com fácil de uso e com um suporte ativo para qualquer dúvida.</p>
						</div>
                        </div>
                        <hr/>

                        <div className="principal">
						<div className="imagem">
							 <IMG src={BasedeDados}></IMG>
						</div>
						<div className="texto">
							<strong className="titulotexto">Armazenamento de dados e Segurança</strong>
							<p>Todos os dados serão guardados em uma base de dados na própria máquina do cliente, ou seja,<br></br> ninguém terá acesso para além do próprio cliente.</p>
						</div>
                        </div>

                        <hr/>
                        <div className="principal">
						<div className="imagem">
							 <IMG src={Mensalidade}></IMG>
						</div>
						<div className="texto">
							<strong className="titulotexto">Sem mensalidades</strong>
							<p>Não existe qualquer tipo de mensalidades, o software torna-se do cliente vitalício após o pagamento total.</p>
						</div>
                        </div>
                        <hr/>

                        <form class="form">
  <h2>Contacte-nos</h2>
  <p type="Name:"><input placeholder="Escreva seu nome aqui" required></input></p>
  <p type="Email:"><input placeholder="Diga-nos como o vamos contactar" type="email" required></input></p>
  <p type="Message:"><textarea placeholder="O que pretende nos dizer?" rows="3" required></textarea></p>
  <button>Send Message</button>
  <div>
    <span class="fa fa-envelope-o"></span> softwaresite@gmail.com
  </div>
</form>

            </div>    

    )
}