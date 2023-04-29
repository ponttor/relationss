import MyTop from './components/UI/mytop/MyTop';
import './styles/App.css';
import movie from './images/movie.jpg';
import clock from './images/clock.png';
import { Button } from 'bootstrap';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
            <MyTop class="top h4">«Пространство отношений»</MyTop>
            <MyTop class="top">Курс от Русской Школы Гештальта и Heim Studio</MyTop>
        </div>
        <div>
          <img src={movie} alt="movie" style={{width: "400px"}}/>
        </div>
      </div>
      <div class="container">
        <img src={clock} alt="clock" style={{width: "100px"}}/>
        <div>
          <MyTop
            class="">Важно! Для того, чтобы приступить к изучению материалов курса, необходимо скачать и установить специальный плагин
          </MyTop>
        </div>
        <a
          href="http://infoprotector.ru/online/download"
          role="button" 
          class="btn btn-secondary btn-sm">Скачать</a>
      </div>
      <MyTop class="top mt-5 h3">1-е Пространство контакта</MyTop>

      <p class="mt-4">Эпизод 1. Мужчина и женщина на границе контакта</p>
      <div class='d-flex'>

      <a
              href="https://www.dropbox.com/s/5opn71g1xexsx01/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2001.01.ipr?dl=0"
              role="button" 
              class="m-4 btn btn-success btn-sm">Видео</a>
     <a
              href="https://www.dropbox.com/s/6a97a25cz91djeh/1-1.pdf?dl=0"
              role="button" 
              class="m-4 d-inline-block btn btn-success btn-sm">Практика</a>
</div>

      <p class="mt-4">Эпизод 2. Ритмы парности.</p>
      <div class='d-flex'>
      <a
              href="https://www.dropbox.com/s/be43zok70ed8jop/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2001.02.ipr?dl=0"
              role="button" 
              class="m-4 btn btn-success btn-sm">Видео</a>
                        <a
              href="https://www.dropbox.com/s/6dyr08fdpmjz1ok/1-2.pdf?dl=0"
              role="button" 
              class="m-4 d-inline-block btn btn-success btn-sm">Практика</a>
</div>

      <p class="mt-4">Эпизод 3. Присутствие: Я – Ты в «здесь и сейчас».</p>
      <div class='d-flex'>

      <a
              href="https://www.dropbox.com/s/9fkzdeq45y8bt7i/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2001.03.ipr?dl=0"
              role="button" 
              class="m-4 btn btn-success btn-sm">Видео</a>
                        <a
              href="https://www.dropbox.com/s/t2rdp5uo0dge63y/1-3.pdf?dl=0"
              role="button" 
              class="m-4 d-inline-block btn btn-success btn-sm">Практика</a>
</div>



     
    </div>
  );
}

export default App;
