import MyTop from './components/UI/mytop/MyTop';
import './styles/App.css';
import movie from './images/movie.jpg';
import clock from './images/clock.png';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
        <h1>«Пространство отношений»</h1>
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
          class="btn btn-secondary btn-sm">Скачать
        </a>
      </div>

      <h4 className="mt-5">1-е Пространство контакта</h4>

      <p class="mt-4">Эпизод 1. Мужчина и женщина на границе контакта</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/5opn71g1xexsx01/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2001.01.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/6a97a25cz91djeh/1-1.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
     </div>

      <p class="mt-4">Эпизод 2. Ритмы парности.</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/be43zok70ed8jop/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2001.02.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/6dyr08fdpmjz1ok/1-2.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
      </div>

      <p class="mt-4">Эпизод 3. Присутствие: Я – Ты в «здесь и сейчас».</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/9fkzdeq45y8bt7i/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2001.03.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/t2rdp5uo0dge63y/1-3.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
      </div>

      <h4 className="mt-5">2-е Пространство интимности</h4>

      <p class="mt-4">Эпизод 1. Близость без цензуры</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/dx92vsa75rhkvme/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2002.01.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/gosqjur00chdtln/2-1.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
     </div>

      <p class="mt-4">Эпизод 2. Вкус к чувственности</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/gs3n1o60mqb0wlk/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2002.02.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/fv042c5gqctrso7/2-2.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
     </div>

     <p class="mt-4">Эпизод 3. Сексуальность: прыжок из Я в Мы</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/3khzcw9f4uzd8dq/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2002.03.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/af2a5w8hh6c9uhc/2-3.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
      </div>

      <p class="mt-4">Эпизод 4. Интимность как атмосфера</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/sg54j5no2nues9i/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2002.04.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/diwxc11d3y2pgoe/2-4.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
      </div>

      <h4 className="mt-5">3-е Пространство совместности</h4>

      <p class="mt-4">Эпизод 1. Пространство «Мы»</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/k8z445r4j26imvo/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2003.01.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/vnwg2qsxzr2x1oi/3-1.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
      </div>

      <p class="mt-4">Эпизод 2. Родительское наследие</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/dqb8e1ddsg9i39m/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2003.02.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/oio9mtlufkhjaum/3-2.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
      </div>

      <p class="mt-4">Эпизод 3. Привязанность как способность</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/ls4saaky8xnv35s/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2003.03.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
        <a
          href="https://www.dropbox.com/s/hecaguaffdbvjpf/3-3.pdf?dl=0"
          role="button" 
          class="m-4 d-inline-block btn btn-success btn-sm">Практика
        </a>
      </div>

      <p class="mt-4">Эпизод 4. Иллюзия о сказке быть вместе</p>
      <div class='d-flex'>
        <a
          href="https://www.dropbox.com/s/taqtdknnmm64fvh/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%2003.04.ipr?dl=0"
          role="button" 
          class="m-4 btn btn-success btn-sm">Видео
        </a>
      </div>

     
    </div>
  );
}

export default App;
