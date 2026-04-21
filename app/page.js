import DataTemplate from "@/components/DataTemplate";
import BottomShade from "@/components/bottom-shadow";

const matches = [
  {
    outcome: "VICTORY",
    opponent: "R Trigger",
    date: "16/04/2026",
    format: "BO1",
    round: "Round 1",
    players: [
      { role: "Exp Lane", hero: "Lapu-Lapu", kda: "2/3/7", score: 6.5, mvp: false },
      { role: "Roam", hero: "Khaleed", kda: "12/6/13", score: 10.9, mvp: true },
      { role: "Mid Lane", hero: "Zetian", kda: "7/5/14", score: 9.2, mvp: false },
      { role: "Jungler", hero: "Suyou", kda: "9/4/8", score: 8.7, mvp: false },
      { role: "Gold Lane", hero: "Claude", kda: "2/6/15", score: 7.5, mvp: false },
    ],
  },
  {
    outcome: "DEFEAT",
    opponent: "Crux Requiem",
    date: "16/04/2026",
    format: "BO3",
    round: "Round 1",
    players: [
      { role: "Exp Lane", hero: "Yu Zhong", kda: "1/5/3", score: 4.2, mvp: false },
      { role: "Roam", hero: "Khaleed", kda: "3/3/4", score: 6.7, mvp: true },
      { role: "Mid Lane", hero: "Zetian", kda: "1/3/5", score: 6.1, mvp: false },
      { role: "Jungler", hero: "Hayabusa", kda: "2/5/4", score: 4.5, mvp: false },
      { role: "Gold Lane", hero: "Karrie", kda: "3/5/3", score: 4.9, mvp: false },
    ],
  },
  {
    outcome: "DEFEAT",
    opponent: "Crux Requiem",
    date: "16/04/2026",
    format: "BO3",
    round: "Round 2",
    players: [
      { role: "Exp Lane", hero: "Uranus", kda: "1/1/4", score: 7.0, mvp: true },
      { role: "Roam", hero: "Hylos", kda: "2/4/4", score: 6.2, mvp: false },
      { role: "Mid Lane", hero: "Zetian", kda: "1/4/5", score: 5.7, mvp: false },
      { role: "Jungler", hero: "X Borg", kda: "4/5/1", score: 4.6, mvp: false },
      { role: "Gold Lane", hero: "Obsidia", kda: "0/5/3", score: 3.5, mvp: false },
    ],
  },
  {
    outcome: "DEFEAT",
    opponent: "Team Clutchers",
    date: "17/04/2026",
    format: "BO3",
    round: "Round 1",
    players: [
      { role: "Exp Lane", hero: "Phoveus", kda: "1/1/3", score: 5.8, mvp: false },
      { role: "Roam", hero: "Khaleed", kda: "3/6/3", score: 5.5, mvp: false },
      { role: "Mid Lane", hero: "Zetian", kda: "1/3/4", score: 5.8, mvp: false },
      { role: "Jungler", hero: "Suyou", kda: "3/3/3", score: 6.0, mvp: false },
      { role: "Gold Lane", hero: "Granger", kda: "0/6/5", score: 3.7, mvp: false },
    ],
  },
  {
    outcome: "DEFEAT",
    opponent: "Team Clutchers",
    date: "17/04/2026",
    format: "BO3",
    round: "Round 2",
    players: [
      { role: "Exp Lane", hero: "Phoveus", kda: "1/3/10", score: 8.4, mvp: true },
      { role: "Roam", hero: "Khaleed", kda: "3/3/6", score: 7.8, mvp: false },
      { role: "Mid Lane", hero: "Vexana", kda: "3/4/5", score: 7.4, mvp: false },
      { role: "Jungler", hero: "Leomord", kda: "5/3/6", score: 8.3, mvp: false },
      { role: "Gold Lane", hero: "Irithel", kda: "2/5/7", score: 6.7, mvp: false },
    ],
  },
  {
    outcome: "VICTORY",
    opponent: "Revival Team 2",
    date: "17/04/2026",
    format: "BO1",
    round: "Round 1",
    players: [
      { role: "Exp Lane", hero: "Phoveus", kda: "3/0/8", score: 9.7, mvp: false },
      { role: "Roam", hero: "Baxia", kda: "2/0/14", score: 11.9, mvp: true },
      { role: "Mid Lane", hero: "Yve", kda: "0/1/12", score: 8.6, mvp: false },
      { role: "Jungler", hero: "Leomord", kda: "6/1/8", score: 10.1, mvp: false },
      { role: "Gold Lane", hero: "Claude", kda: "6/1/5", score: 9.8, mvp: false },
    ],
  },
  {
    outcome: "VICTORY",
    opponent: "Ninjas In Pajamas",
    date: "18/04/2026",
    format: "BO3",
    round: "Round 1",
    players: [
      { role: "Exp Lane", hero: "Gloo", kda: "2/1/7", score: 7.8, mvp: false },
      { role: "Roam", hero: "Khaleed", kda: "1/1/12", score: 9.8, mvp: true },
      { role: "Mid Lane", hero: "Lylia", kda: "3/4/7", score: 7.3, mvp: false },
      { role: "Jungler", hero: "Suyou", kda: "6/0/4", score: 9.6, mvp: false },
      { role: "Gold Lane", hero: "Claude", kda: "3/2/6", score: 8.2, mvp: false },
    ],
  },
  {
    outcome: "DEFEAT",
    opponent: "Ninjas In Pajamas",
    date: "18/04/2026",
    format: "BO3",
    round: "Round 2",
    players: [
      { role: "Exp Lane", hero: "Lapu-Lapu", kda: "1/5/0", score: 3.0, mvp: false },
      { role: "Roam", hero: "Khaleed", kda: "1/3/2", score: 5.8, mvp: false },
      { role: "Mid Lane", hero: "Yve", kda: "2/2/2", score: 6.4, mvp: false },
      { role: "Jungler", hero: "Lancelot", kda: "0/1/3", score: 5.7, mvp: false },
      { role: "Gold Lane", hero: "Claude", kda: "0/3/1", score: 3.6, mvp: false },
    ],
  },
  {
    outcome: "DEFEAT",
    opponent: "Ninjas In Pajamas",
    date: "18/04/2026",
    format: "BO3",
    round: "Round 3",
    players: [
      { role: "Exp Lane", hero: "Terizla", kda: "0/1/5", score: 6.7, mvp: false },
      { role: "Roam", hero: "Hilda", kda: "4/5/3", score: 6.8, mvp: false },
      { role: "Mid Lane", hero: "Lylia", kda: "3/1/6", score: 9.3, mvp: true },
      { role: "Jungler", hero: "Yi Sun Shin", kda: "1/1/5", score: 7.0, mvp: false },
      { role: "Gold Lane", hero: "Karrie", kda: "3/2/1", score: 6.3, mvp: false },
    ],
  },
  {
    outcome: "VICTORY",
    opponent: "RIP",
    date: "19/04/2026",
    format: "Knockout",
    round: "Round 1",
    players: [
      { role: "Exp Lane", hero: "Phoveus", kda: "2/1/7", score: 8.4, mvp: false },
      { role: "Roam", hero: "Hilda", kda: "4/0/6", score: 10.4, mvp: true },
      { role: "Mid Lane", hero: "Lylia", kda: "0/1/9", score: 7.7, mvp: false },
      { role: "Jungler", hero: "Leomord", kda: "6/1/2", score: 8.3, mvp: false },
      { role: "Gold Lane", hero: "Claude", kda: "2/1/5", score: 7.7, mvp: false },
    ],
  },
  {
    outcome: "DEFEAT",
    opponent: "Epsilon Eternal",
    date: "19/04/2026",
    format: "BO3",
    round: "Round 1",
    players: [
      { role: "Exp Lane", hero: "Gloo", kda: "1/2/1", score: 5.4, mvp: false },
      { role: "Roam", hero: "Khufra", kda: "0/2/3", score: 7.1, mvp: true },
      { role: "Mid Lane", hero: "Lunox", kda: "1/3/2", score: 5.2, mvp: false },
      { role: "Jungler", hero: "Suyou", kda: "0/2/2", score: 4.9, mvp: false },
      { role: "Gold Lane", hero: "Karrie", kda: "1/4/0", score: 4.0, mvp: false },
    ],
  },
  {
    outcome: "DEFEAT",
    opponent: "Epsilon Eternal",
    date: "19/04/2026",
    format: "BO3",
    round: "Round 2",
    players: [
      { role: "Exp Lane", hero: "Phoveus", kda: "0/3/3", score: 5.3, mvp: false },
      { role: "Roam", hero: "Khaleed", kda: "0/5/2", score: 3.8, mvp: false },
      { role: "Mid Lane", hero: "Lylia", kda: "0/2/4", score: 6.1, mvp: false },
      { role: "Jungler", hero: "Leomord", kda: "4/2/0", score: 6.9, mvp: true },
      { role: "Gold Lane", hero: "Claude", kda: "0/3/1", score: 3.2, mvp: false },
    ],
  },
];

export default function Home() {
  return (
    <>
      <DataTemplate matches={matches} />
      <BottomShade />
    </>
  );
}
