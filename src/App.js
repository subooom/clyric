import { signIn } from "./auth/google";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ marginBottom: 50 }}>
        <nav
          style={{ background: "#9edbff" }}
          className="navbar navbar-expand-lg navbar-light "
        >
          <div className="container-fluid" style={{ padding: "0 50px" }}>
            <a className="navbar-brand" href="#">
              Lyric Translate
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ flexGrow: 0 }}
            >
              <button className="btn btn-primary" onClick={signIn}>
                Sign In With Google
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div style={{ padding: "0 50px" }} className="container-fluid ">
        <div className="d-flex justify-content-start align-items-center">
          <div style={{ width: "50%" }}>
            <select class="form-select mb-3" style={{ width: 200 }}>
              <option value="" selected>
                Original
              </option>
              <option value="1">English</option>
              <option value="2">Nepali</option>
              <option value="3">Hindi</option>
            </select>
          </div>
          <div style={{ width: "50%" }}>
            <select class="form-select mb-3" style={{ width: 200 }}>
              <option value="">Original</option>
              <option value="1" selected>
                English
              </option>
              <option value="2">Nepali</option>
              <option value="3">Hindi</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ width: "50%", height: "100vh" }}>
            Verse 4: KR$NA] <br /> Aya me kahan se, Dekho pahauncha me kahan pe,
            <br /> KR$NA ke naam pe chaudi yahan puri awaam hai <br />
            Mile dua ke naam pe, dhuaan ye jaante
            <br /> Kyun aaj ye kampte? dikhe saanmp inhe kue me jhaank ke <br />
            Pure ek saans me karoo me to asli kaand
            <br />
            Jalti jaan inki dekh ke mera asli kaam <br />
            Jaldi baand ye naqab jaise badrinath me Rajnikanth, I'm Rajnikant
            <br />
            Kis chapri ki fatt ri gaand?
            <br />
            10 plus years been underrated as fuck Always kept it a buck, I never
            ducked no action
            <br />
            Thought they'd be chuffed and celebrating my ups
            <br /> But they're claiming it's luck and never praising my passion
            <br />
            I'm a savage in both languages, kinda tight with the rap but it's no
            bandages <br />
            Brandishing flows that are so damaging, throw hands with it, when
            the beat bang
            <br />
            My fangs come out and I strangle it Jaan te baat sab - meri baatein
            vastav
            <br />
            Kahan se kaha tak dekhe mene raaste ghaatak <br /> Rap ke waste
            karte ye khaas se nataak <br />
            Paas the khaas tab wahi mere paas hai aaj tak
            <br /> Never lacking the energy making my enemy's scared of me
            <br />
            Cleverly put 'em in jeopardy chopping the melody - guillotine I'm a
            remedy, mentally, for the ones that need therapy
            <br /> 'Cause I'm meant to be legendary, hella deep in the scene
          </div>
          <div style={{ width: "50%", height: "100vh" }}>
            Verse 4: KR$NA] <br /> Where did i come from, now watch what have i
            achieved? reach
            <br /> In the name of KR$NA girls are here like wildfire <br />
            Instead of prayers you get smoke
            <br /> Why are they shivering today? You'll see snakes when you peek
            into the wells
            <br />
            I do a true scam to you in one breathe
            <br />
            Burning body, watching at them makes you realize I'm the real deal
            <br />
            Wear the mask fast, like you're badrinath(one of the many avatar of
            shiva, I'm Rajnikant (bollywood actor)
            <br />
            Tell me which wannabe fuckboy's are getting ass fucked(getting
            scared)
            <br />
            10 plus years been underrated as fuck Always kept it a buck, I never
            ducked no action
            <br />
            Thought they'd be chuffed and celebrating my ups
            <br /> But they're claiming it's luck and never praising my passion
            <br />
            I'm a savage in both languages, kinda tight with the rap but it's no
            bandages <br />
            Brandishing flows that are so damaging, throw hands with it, when
            the beat bang
            <br />
            My fangs come out and I strangle it <br /> Everyone knows, my talks
            are realistic
            <br />
            I've seen treacherous roads all around
            <br /> Rap ke waste karte ye khaas se nataak <br />
            Put on an act in the name of rap
            <br />
            Those who were near me, are still near me
            <br /> Never lacking the energy making my enemy's scared of me
            <br />
            Cleverly put 'em in jeopardy chopping the melody - guillotine I'm a
            remedy, mentally, for the ones that need therapy
            <br /> 'Cause I'm meant to be legendary, hella deep in the scene
            Verse 4: KR$NA] <br /> Aya me kahan se (where did i come from) Dekho
            <br />
            pahauncha me kahan pe(watch where did i reach) KR$NA ke naam pe
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
