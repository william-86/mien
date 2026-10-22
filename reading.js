/* ============================================================
   MIEN · long-form reading composer
   Framework: five-element face types, three courts, five features,
   and the decade map of the face (classical Chinese face reading,
   popularised in the West by Jean Haner's "The Wisdom of Your Face").
   All prose below is original to Mien — no book text is reproduced.
   ============================================================ */
window.MIEN_READING = (function(){

  /* ---------- 1 · element profiles ---------- */
  var ELEMENT = {
    Water: {
      archetype: "the Innovator",
      core: "room to move",
      open: "Water is the type that arrives sideways. You rarely take the route the family expected, and the detours — the year abroad, the job that made no sense on paper, the friendship nobody could place — tend to be where your life actually happened. The classical read puts intuition at the centre of this type: you know things before you can defend them, and the times you overruled that knowing are the ones you still turn over at night.",
      gift: "Your gift is range. You can hold two contradictory ideas without panic, read a situation from an angle nobody in the room has tried, and stay calm in ambiguity that makes other people reach for a rule. That is why Water types so often end up as the person others come to at the messy stage — before the plan exists.",
      shadow: "The shadow is drift. Freedom is a real need for you, not an excuse, but the same instinct that keeps you unboxed also keeps you uncommitted. You can spend years gathering options and call it openness; the honest word is postponement. The second shadow is privacy so deep that people decide you are cold when you are simply not finished thinking.",
      practice: "One practice: name the single thing you are actually protecting, out loud, once a week. Water without a container becomes a puddle. Water with one becomes a river."
    },
    Wood: {
      archetype: "the Warrior",
      core: "something worth pushing against",
      open: "Wood is the type that moves. Not restlessly — directionally. You think in lines, from here to the outcome, and you are usually three steps ahead of the conversation. The classical read associates this type with growth under pressure: you are at your best against a problem that resists, and quietly uncomfortable when nothing does.",
      gift: "Your gift is follow-through. Plenty of people can start; you are the rare one who keeps the promise after the novelty burns off. You learn fast because you treat every failure as information rather than verdict, and you tend to leave institutions better than you found them — even when nobody thanks you for it.",
      shadow: "The shadow is the moving target. You finish one thing and immediately raise the bar, so the satisfaction you were working toward keeps receding. Second shadow: the same directness that cuts through noise can cut people. You are not unkind; you are simply faster than the room, and speed reads as impatience.",
      practice: "One practice: finish, then stop for a full day before the next thing. Wood grows in rings, not in a straight line — the pause is where the ring forms."
    },
    Fire: {
      archetype: "the Lover",
      core: "to feel alive, and to be met",
      open: "Fire is the type that lights the room before it says anything. Your face carries the classical markers of this element — the openness around the eyes, the animated features — and people respond to it before you have made a single argument. You are genuinely interested in other people, which is rarer than it sounds and is the engine of most of your good fortune.",
      gift: "Your gift is transmission. You can make an idea feel possible, and you do it by caring rather than by persuading. You notice the person at the edge of the group, you remember the detail from six months ago, and you give warmth without keeping a ledger — which is why people return it to you in ways you never planned.",
      shadow: "The shadow is absorption. Fire takes on the temperature of whatever it is near: a difficult friend can flatten a week, a cold room can convince you that you are the problem. Boundaries are not a personality upgrade for you, they are load-bearing. The second shadow is starting more than the season can hold.",
      practice: "One practice: before you say yes, check whether you are excited about the thing or about being wanted. Fire can tell the difference in about four seconds — if it is allowed to."
    },
    Earth: {
      archetype: "the Nurturer",
      core: "somewhere solid to stand",
      open: "Earth is the type people trust before they can explain why. Your features read as steady rather than striking — the classical markers of this element are breadth and fullness — and the effect is a kind of permission: people tell you things they have not told their family. You are the one who remembers the birthday, holds the spare key, and notices when someone has gone quiet.",
      gift: "Your gift is reliability under weight. When the plan collapses, you are the person still standing in the middle of it, and the people around you reorganise around that calm. You are also unusually good at the unglamorous middle of things — the maintenance, the follow-up, the second year — which is where most good outcomes are actually decided.",
      shadow: "The shadow is over-giving with a silent invoice. You absorb other people's worry until it becomes your own, and you rarely say so until the resentment has already set. The second shadow is staying too long: in roles, in rooms, in arrangements that stopped fitting, because leaving feels like letting someone down.",
      practice: "One practice: receive one thing a day without deflecting it. Earth is allowed to be the one who is looked after; that is not a demotion, it is the other half of the exchange."
    },
    Metal: {
      archetype: "the Visionary",
      core: "meaning, and the right order of things",
      open: "Metal is the type with a standard. Not perfectionism for show — an internal sense of how things should be that you cannot quite explain and cannot quite switch off. Your features read as defined rather than soft, and the classical read links this element to discernment: you see the flaw in the plan before you see the plan.",
      gift: "Your gift is clarity. You can walk into a mess and name the three things that actually matter, and you do it without needing to be liked for it. You are also unusually good at quality — the edit, the cut, the removal — because you are willing to lose something good for something right.",
      shadow: "The shadow is the cold remove. Your standards are aimed outward first, so other people feel measured even when you are only thinking. The second shadow is delay: the work is not ready, the conversation is not ready, the life is not ready — and readiness quietly becomes a place to live.",
      practice: "One practice: ship at eighty percent, once a week. Metal's real lesson is that order is a tool, not a residence."
    }
  };

  /* ---------- 2 · three courts ---------- */
  var COURT = {
    upper: {
      head: "The upper court leads",
      body: "Your forehead carries the largest share of the vertical — the court the classical texts assign to the early years and to the life of the mind. It reads as a face organised around perception: you take in a great deal before you act, and your instinct is to understand a thing fully rather than to move on it quickly. In practice this makes you excellent at beginnings and diagnosis, and slower at the unglamorous middle. People may read the delay as hesitation; it is usually quality control. The thing to watch is the point where more information stops improving the decision and starts replacing it."
    },
    middle: {
      head: "The middle court leads",
      body: "The nose-and-cheek span dominates your face — the court of the working years, and the one the tradition ties to drive and appetite. It reads as a face built for execution: you move early, correct in motion, and are more comfortable with an imperfect plan running than a perfect plan waiting. This is the court of people who get things done and then discover the doing became the point. Your risk is not laziness, it is over-commitment: staying with something long after the original reason has evaporated, because stopping feels like a verdict on you rather than a decision about the work."
    },
    lower: {
      head: "The lower court leads",
      body: "The chin and jaw carry the largest share — the court of the later chapter, and in the classical read the seat of endurance and accumulated standing. It reads as a face that compounds: you get better with time in a way that is hard to see year to year and obvious over a decade. Your instinct is to build slowly, keep the ground you have taken, and let others burn out in front of you. The risk is patience used as shelter — waiting to be chosen, waiting to be ready, when the honest move is to make the thing visible before it is finished."
    }
  };

  /* ---------- 3 · five features ---------- */
  var BROW = {
    wide: "Your brow span is wide relative to the jaw, which the tradition associates with an expansive temperament. You take in more than you announce, and you are slow to write anyone off — including yourself. In meetings you are often the person who can still see the other side after everyone has picked one. The cost is decision latency: you gather long past the point of usefulness, and the last ten percent of information rarely changes the answer. Say the verdict out loud a day earlier than feels safe.",
    narrow: "Your brow runs tight against the jaw, which reads as a filtering temperament. You decide quickly, defend the decision longer, and have very little patience for noise dressed as input. This is a genuine advantage in rooms where nobody wants to be the one who chooses. The cost is that you can close a door before the useful objection has finished arriving — usually from the quietest person present, who needed one more beat to say it.",
    even: "Your brow and jaw are close in span, which reads as a balanced temperament: you gather, then commit, without theatrics in either direction. You are not the fastest decider in the room and not the slowest, and people trust you precisely because you do not perform certainty. The watch-point is the middle: when a decision genuinely matters, your evenness can look like distance, and the people affected may need to hear your reasoning rather than infer it."
  };

  var EYES = {
    open: "Your eyes open generously, which the tradition links to an outward temperament. You read a room before it has finished talking, and your first reaction is usually the honest one — warmth before analysis. People find you easy to be around, which means they also bring you their news first, and that flow is a real asset in work and friendship. The watch-point is absorption: an open aperture takes in everything, including the moods that were never yours. Learn the difference between sensing a room and being responsible for it.",
    level: "Your eyes sit level rather than wide, which reads as an inward temperament. You watch longer than you speak, and you release personal detail in stages — which people sometimes mistake for coldness and later discover was discernment. This gives you unusual accuracy about motives, because you are not busy signalling. The cost is being under-read: the people closest to you may be guessing at your interior while you assume it is obvious. Say one true sentence more than feels natural.",
    steady: "Your eye aperture is moderate — neither broadcasting nor barricaded. You are present without performing presence, which is a quieter skill than it sounds and the reason people relax around you. You can hold attention without needing it. The watch-point is the middle setting itself: moderate signals can be read as agreement when you were only listening, so state your position explicitly when it matters."
  };

  var NOSE_SHORT = {
    broad: "The base of your nose is broad relative to the face — the classical wealth palace, read here as the width of your appetite for opportunity. Broad-base people open several doors at once and can carry risk while the outcome settles. Your instinct is to spread: three projects, two income streams, a standing invitation to something that might become interesting.",
    narrow: "The base of your nose is narrow relative to the face — the wealth palace, read as a concentrated appetite. You work one channel at a time, guard the margin, and would rather own a small thing completely than a slice of something large. This is the profile that survives bad years.",
    measured: "The base of your nose is moderate — the wealth palace, read as selective appetite. You widen only after the current channel proves itself, which is neither the boldest nor the most cautious position and is usually the one that lasts."
  };

  var NOSE_LENGTH = {
    long: "Your nose also runs long relative to the face, which the tradition ties to a longer horizon: you are planning past the current cycle, and your money tends to arrive late and large rather than early and small. Protect the patience — it is the actual asset.",
    short: "Your nose runs short relative to the face, which reads as a near-term instinct: you work the next quarter better than the next decade. The leak in this profile is rarely one large loss; it is the small recurring cost you stopped noticing three years ago."
  };

  var MOUTH = {
    wide: "Your mouth line is broad, which the tradition associates with an expressive temperament. You persuade by warmth and momentum, you say the thing out loud, and you give generously with information — introductions, feedback, the name of the person who can help. People remember you as open. The watch-point is the sentence you did not need to say: breadth invites disclosure, and not every room has earned it.",
    fine: "Your mouth line is finely drawn, which reads as a precise temperament. You speak less and place it better, and you give selectively rather than widely — which makes what you do offer carry more weight. People often quote you back to yourself. The watch-point is that precision can look like withholding: the people who need your good opinion may not be able to infer it from your restraint.",
    balanced: "Your mouth line is moderate — you speak when it moves something and stay quiet when it will not. This is the temperament that gets invited to the difficult conversation, because you are neither the loudest nor the absent one. The watch-point is defaulting to the middle: sometimes the room needs you to take a side rather than hold it."
  };

  var EARS = "The classical map gives the ears the first decade and the intuition — the part of you that formed before you had language for it. A front-facing photo cannot read them honestly, so this reading leaves them unclaimed rather than guessing. If you want the fifth feature, a profile photo would give it: ear position relative to the brow line is the traditional measure, and the outward-set ear is associated with independent, pattern-first thinking.";

  /* ---------- 4 · decade map ---------- */
  var LIFE_MAP = "One more layer, and it is the one people find most useful. The tradition reads the face downward as a timeline: the hairline and forehead as the twenties, the eyes as the thirties, the nose as the forties, the mouth as the fifties, the chin as the sixties, the jaw as the seventies. It is not prophecy — it is a way of asking better questions. A strong forehead and a soft chin does not mean a good start and a bad ending; it usually means the person built their twenties deliberately and is still learning what the later decades are for. Use it in the reflective direction: which decade are you in, and what does that band of your face suggest you were practising then?";

  /* ---------- 5 · closing ---------- */
  var CLOSING = [
    "The honest frame for all of this: your face is a record of how you have met your life so far — the habits that settled into expression, the expressions that settled into lines. It is not a verdict and it is not a forecast. Nothing in a proportion decides what you do next week.",
    "Three things worth carrying out of it. First, name your element's core need out loud — the thing you keep arranging your life around — and check whether the arrangement is still yours. Second, find the feature that reads hardest for you, and treat its shadow as information rather than identity: the drift of Water, the raised bar of Wood, the absorption of Fire, the silent invoice of Earth, the cold remove of Metal. Third, use the decade map as a question, not a score.",
    "The tradition's better half was never prediction. It was the instruction to look at a face — including your own in the mirror — with less judgement and more curiosity. That part is still worth keeping."
  ];

  /* ---------- helpers ---------- */
  function pick(map, key){ return map[key] || map.even || ""; }

  function browBand(v){ return v > 1.14 ? "wide" : (v < 1.00 ? "narrow" : "even"); }
  function eyeBand(v){ return v > 0.35 ? "open" : (v < 0.27 ? "level" : "steady"); }
  function noseBand(v){ return v > 0.29 ? "broad" : (v < 0.245 ? "narrow" : "measured"); }
  function mouthBand(v){ return v > 0.46 ? "wide" : (v < 0.40 ? "fine" : "balanced"); }

  function words(s){
    return String(s).replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  }

  /* ---------- build ---------- */
  function build(ctx){
    var el = ELEMENT[ctx.element] || ELEMENT.Water;
    var court = COURT[ctx.region] || COURT.middle;
    var sections = [];

    sections.push({ h: "Your element · " + ctx.element + " · " + el.archetype, body:
      el.open + " The need underneath it is simple and non-negotiable: " + el.core + ". " + el.gift + " " + el.shadow });

    if(ctx.m){
      sections.push({ h: court.head, body: court.body });
      var m = ctx.m;
      sections.push({ h: "Brow · how you decide", body: pick(BROW, browBand(m.foreFace / (m.jawFace || 1))) });
      sections.push({ h: "Eyes · how you take people in", body: pick(EYES, eyeBand(m.eyeAspect)) });
      sections.push({ h: "Nose · the wealth palace", body:
        pick(NOSE_SHORT, noseBand(m.noseW)) + " " +
        (m.noseL > 0.30 ? NOSE_LENGTH.long : NOSE_LENGTH.short) });
      sections.push({ h: "Mouth · how you give and receive", body: pick(MOUTH, mouthBand(m.mouthW)) });
      sections.push({ h: "Ears · the first decade", body: EARS });
    } else {
      sections.push({ h: "Brow · how you decide", body:
        "You chose a " + ctx.element + " shape rather than measuring one, so the feature-level detail stays closed — that is the honest trade. What the type still tells you is the shape of the decision: " +
        (ctx.element === "Wood" ? "you decide by direction, and get restless without a target." :
         ctx.element === "Fire" ? "you decide by contact, and can feel the right answer in a room before you can argue it." :
         ctx.element === "Earth" ? "you decide by durability, and will take the slower option if it holds." :
         ctx.element === "Metal" ? "you decide by standard, and would rather wait than ship something untrue to it." :
         "you decide by feel, and are usually right about people before you are right about plans." ) });
    }

    sections.push({ h: "The map of the decades", body: LIFE_MAP });

    if(ctx.chart && ctx.chart.element){
      var same = ctx.chart.element === ctx.element;
      sections.push({ h: "Face and chart · " + ctx.element + " meets " + ctx.chart.element, body: same
        ? "Your birth chart's Day Master is also " + ctx.element + ", which is the doubly-marked case: the temperament your face reads and the temperament your chart reads are pointing the same way. That makes the element's gift easier to use and its shadow harder to see — nothing in you argues against it. The practical advice is external: put one person in your life whose element is genuinely different, and let them be the brake you cannot be for yourself."
        : "Your birth chart's Day Master is " + ctx.chart.element + " — a different register from the " + ctx.element +
          " your face reads. The tradition would describe this as a face that shows how you meet the world and a chart that shows what you are made of: the surface style is " + ctx.element.toLowerCase() +
          ", the underlying engine is " + ctx.chart.element.toLowerCase() +
          ". People who know you only casually will describe you by the first; the people who have worked with you for years will describe you by the second. Both are accurate. The friction shows up when you defend a " + ctx.element.toLowerCase() +
          " strategy with " + ctx.chart.element.toLowerCase() + " stamina and exhaust yourself proving a point the other half of you never wanted." });
    }

    sections.push({ h: "Closing", body: CLOSING.join(" ") + " " + el.practice });

    var total = 0;
    sections.forEach(function(s){ total += words(s.h) + words(s.body); });
    return { sections: sections, words: total, minutes: Math.max(1, Math.round(total / 240)) };
  }

  return { build: build, words: words };
})();
