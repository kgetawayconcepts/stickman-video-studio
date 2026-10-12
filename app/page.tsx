'use client';

import { useState } from 'react';
import { ArrowUpRight, Clapperboard, Clock3, Download, Film, Layers3, Mic2, Play, Sparkles, WandSparkles } from 'lucide-react';

const styles = [
  { id: 'minimal', title: 'Minimalist', note: 'Black & white line art' },
  { id: 'cinematic', title: 'Cinematic story', note: 'Colour, mood & environments' },
  { id: 'comedy', title: 'Prehistoric comedy', note: 'Hand-drawn, expressive' },
];

export default function Home() {
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState('60');
  const [style, setStyle] = useState('cinematic');
  const [format, setFormat] = useState('9:16');
  const [created, setCreated] = useState(false);

  function createPlan() {
    if (!topic.trim()) return;
    setCreated(true);
  }

  return <main className="shell">
    <aside className="sidebar">
      <a className="brand" href="#top"><span className="brand-mark"><Clapperboard size={21} /></span><span>stickman<span className="brand-light">studio</span><small>VIDEO FACTORY</small></span></a>
      <div className="side-label">WORKSPACE</div>
      <a className="nav-item active" href="#create"><WandSparkles size={17} /> Create a video</a>
      <a className="nav-item" href="#workflow"><Layers3 size={17} /> Production workflow</a>
      <div className="side-label tools-label">YOUR FACTORY</div>
      <div className="factory-card"><span className="status-dot"/><div><strong>Studio setup</strong><p>First build · Preview mode</p></div></div>
      <div className="sidebar-bottom"><div className="plan-icon"><Sparkles size={17}/></div><div><strong>Build in stages</strong><p>Plan first. Connect generation services next.</p></div></div>
    </aside>

    <section className="main-area" id="top">
      <header className="topbar"><div className="crumb">Workspace <span>/</span> <b>New video</b></div><div className="top-pill"><span className="status-dot"/> Prototype</div></header>
      <div className="content-wrap">
        <section className="hero"><div className="eyebrow"><span className="eyebrow-line"/> YOUR AI VIDEO WORKSPACE</div><h1>From one idea<br/>to a <span>whole video.</span></h1><p className="hero-copy">Build a story, direct every scene, and prepare a short-form video without starting from a blank page.</p><div className="hero-chips"><span><Sparkles size={14}/> AI-assisted planning</span><span><Clock3 size={14}/> 30–90 seconds</span><span><Film size={14}/> Vertical-first</span></div></section>

        <div className="builder-grid" id="create">
          <section className="panel brief-panel"><div className="panel-heading"><div><div className="step">STEP 01</div><h2>Start with an idea</h2><p>Give your video factory a topic or paste your rough script.</p></div><span className="heading-icon"><WandSparkles size={19}/></span></div>
            <label className="field-label" htmlFor="topic">VIDEO TOPIC OR SCRIPT</label>
            <textarea id="topic" value={topic} onChange={e => {setTopic(e.target.value); setCreated(false);}} placeholder="Example: The airport mistake that can get a passenger denied boarding…" rows={5}/>
            <div className="field-foot"><span>Tip: a clear claim or surprising question makes a stronger opening.</span><span>{topic.length}/2000</span></div>
            <div className="field-label format-label">VIDEO FORMAT</div><div className="format-options"><button type="button" className={format === '9:16' ? 'format-option selected' : 'format-option'} onClick={() => setFormat('9:16')}><span className="ratio ratio-vertical"/><span><b>9:16</b><small>TikTok / Shorts</small></span></button><button type="button" className={format === '16:9' ? 'format-option selected' : 'format-option'} onClick={() => setFormat('16:9')}><span className="ratio ratio-wide"/><span><b>16:9</b><small>YouTube</small></span></button></div>
          </section>

          <section className="panel settings-panel"><div className="panel-heading"><div><div className="step">STEP 02</div><h2>Direct the look</h2><p>Choose a starting style for your scenes.</p></div><span className="heading-icon"><Layers3 size={19}/></span></div>
            <label className="field-label" htmlFor="duration">VIDEO LENGTH</label><div className="duration-row">{[['30','30 sec'],['60','60 sec'],['90','90 sec']].map(([value,label])=><button key={value} type="button" onClick={()=>setDuration(value)} className={duration===value?'duration-btn selected':'duration-btn'}>{label}</button>)}</div>
            <div className="field-label style-label">VISUAL STYLE</div><div className="style-list">{styles.map((item,index)=><button type="button" key={item.id} onClick={()=>setStyle(item.id)} className={style===item.id?'style-option selected':'style-option'}><span className={'style-thumb thumb-'+item.id}><span/><i/><b/></span><span className="style-text"><b>{item.title}</b><small>{item.note}</small></span><span className="radio-dot"/></button>)}</div>
            <button className="primary-button" type="button" onClick={createPlan}><Sparkles size={17}/> Build my video plan <ArrowUpRight size={17}/></button>
            <p className="button-note">No video credits used by this planning preview.</p>
          </section>
        </div>

        {created && <section className="panel result-panel"><div className="result-header"><div><div className="step">YOUR PROJECT BRIEF</div><h2>Ready to direct</h2></div><span className="preview-badge">PREVIEW</span></div><div className="result-topic">{topic}</div><div className="result-specs"><span><Clock3 size={15}/>{duration} seconds</span><span><Film size={15}/>{format} format</span><span><Layers3 size={15}/>{styles.find(s=>s.id===style)?.title}</span></div><div className="next-box"><Mic2 size={18}/><div><b>Next stage: script & storyboard</b><p>This prototype captures your brief. Script generation, scene prompts, narration, clip generation, subtitles and MP4 export still need to be connected before this becomes a working video factory.</p></div></div></section>}

        <section className="workflow" id="workflow"><div className="workflow-head"><div><div className="step">THE PIPELINE</div><h2>One workflow. Six stages.</h2></div><span className="workflow-note">Designed for mobile creators</span></div><div className="pipeline">{[{n:'01',icon:<WandSparkles size={17}/>,title:'Brief & hook',desc:'Topic, angle, opening'},{n:'02',icon:<Layers3 size={17}/>,title:'Script & scenes',desc:'Narration + storyboard'},{n:'03',icon:<Sparkles size={17}/>,title:'Scene generation',desc:'Consistent visual prompts'},{n:'04',icon:<Mic2 size={17}/>,title:'Voice & captions',desc:'Narration + subtitles'},{n:'05',icon:<Film size={17}/>,title:'Assemble video',desc:'Transitions + sound'},{n:'06',icon:<Download size={17}/>,title:'Export & publish',desc:'MP4 + social metadata'}].map((item)=><div className="pipeline-item" key={item.n}><div className="pipeline-icon">{item.icon}</div><div className="pipeline-copy"><small>{item.n}</small><b>{item.title}</b><p>{item.desc}</p></div><span className="pipeline-arrow"><Play size={12} fill="currentColor"/></span></div>)}</div></section>
        <footer className="footer"><span>STICKMAN VIDEO STUDIO</span><span>Planning prototype · Generation integrations not connected yet</span></footer>
      </div>
    </section>
  </main>;
}
