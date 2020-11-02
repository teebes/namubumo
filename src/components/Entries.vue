<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="9" lg="8" xl="6">

        <div class='page-title d-flex flex-row justify-center'>
          2020 Entries
        </div>

        <div class='mt-4'>
          <v-card class='my-4'>
            <v-card-title>Waterdeep</v-card-title>
            <v-card-text>
              <div>
                <a href='https://www.waterdeep.org'>https://www.waterdeep.org</a> - Jergal
              </div>
               <div class='mt-2'>Waterdeep is a free-to-play steampunk fantasy adventure, live since 1997! We are one of the best RoT muds still kicking and we've never stopped delivering.  We have great developers and offer fair-free-fun with an opportunity to earn some crypto tokens! Waterdeep built a new area specific for NaMuBuMo and Halloween, named Topeka. Topeka offers a fun and dynamic town with a scary new adventure!  Check us out today at waterdeep.org port 4200!</div>
            </v-card-text>
          </v-card>

          <v-card class='my-4'>
            <v-card-title>ArchaicQuest</v-card-title>
            <v-card-text>
              <div>
                <a href='https://play.archaicquest.com'>https://play.archaicquest.com</a> - Liam Kenneth
              </div>
               <div class='mt-2'>
                 ArchaicQuest is a new web based MUD in the making, built with the ArchaicQuest II codebase.<br/>
                 NaMuBuMo was a good reason to stop coding and give my web admin tool a workout to see what it can or can't do.<br/>
                 The challenge I set myself was to create an academy mud school area for my game I managed 135 rooms out of 167.<br/>
                 You can explore the 4 gardens of the academy, there're NPCs that interact with you and a quest to complete.<br/>
                 ArchaicQuest is early pre-alpha stages but I hope you have fun and get immersed in the descriptions as you walk through the different gardens of the academy.
              </div>
            </v-card-text>
          </v-card>
        </div>

        <!-- <div class='mt-12 text-center'><em>2020 Entries will be posted after the end of October.</em></div> -->

        <div class='page-title d-flex flex-row justify-center'>
          2019 Entries
        </div>

        <div class='mt-4'>
          <v-card class='my-4'>
            <v-card-title>Skaldsblod</v-card-title>
            <v-card-text>
              <div>
                <a href='https://writtenrealms.com/worlds/4058/skaldsblod'>https://writtenrealms.com/worlds/4058/skaldsblod</a> - John Downing
              </div>
               <div class='mt-2'>The honeyed blood of a murdered god, twice stolen, rains from the sky, spreading wisdom and terror where it lands. Three realms battle for the mead of poetry, and the earth itself writhes and twists with myth given shape. Side with the Humans of Midgard, the Jotunn of Jotunnheim, or the Dwarves of Nidavellir as you fight for vengeance, glory, and control of legend itself.</div>
            </v-card-text>
          </v-card>

          <v-card class='my-4'>
            <v-card-title>The Orbs of Escher</v-card-title>
            <v-card-text>
              <div>
                <a href='https://www.cleftofdimensions.net/'>https://www.cleftofdimensions.net/</a>
              </div>
               <div class='mt-2'> The Orbs of Escher is the 2019 NaMuBuMo submission for the Cleft of Dimensions. To explore the Orbs of Escher, connect to the Cleft of Dimensions, create a new character, and go 'up' as soon as you enter the game. The Orbs of Escher are written entirely by GPT-2, the transformer-based natural language processing AI published by OpenAI in February 2019. We fine-tuned GPT-2 to write MUD rooms by feeding it our entire full-scale MUD as a training corpus. After training, we instructed GPT-2 to write several thousand rooms, which we filtered for quality and stitched into the quilt that is the Orbs of Escher. Our human builders have primarily arranged and edited what GPT-2 has authored. The Orbs of Escher are sometimes surreal, sometimes poetic, and sometimes complete nonsense. We hope you will enjoy this experiment into a MUD area written by artificial intelligence.</div>
            </v-card-text>
          </v-card>

          <v-card class='my-4'>
            <v-card-title>Lands of Oneiro</v-card-title>
            <v-card-text>
              <div>
                lands-of-oneiro.net:7000 - Melissa Moritz
              </div>
               <div class='mt-2'>Fantasy World Invaded by Lovecraftian Horrors - Alpha Development Phase</div>
            </v-card-text>
          </v-card>

          <v-card class='my-4'>
            <v-card-title>The Hallowed Outcasts</v-card-title>
            <v-card-text>
              <div>
                <a href='https://writtenrealms.com/worlds/4396/the-hallowed-outcasts'>https://writtenrealms.com/worlds/4396/the-hallowed-outcasts</a> - Addison Walkosz
              </div>
               <div class='mt-2'>When the last refuge created by the remaining survivors of the Revered Kingdoms is threatened by an malevolent force, the world must seek out a new hero to prepare them for the oncoming war about to unfold.</div>
            </v-card-text>
          </v-card>

          <v-card class='my-4'>
            <v-card-title>MidMUD</v-card-title>
            <v-card-text>
              <div>
                <a href='https://midmud.com/'>https://midmud.com/</a> - Eric Oestrich
              </div>
               <div class='mt-2'>Try out the two new areas, Slate Vale and Amra Prairie. These can be found to the west of Ferrite Springs. Slate Vale is a small town that you can find nestled in the Iron Peaks past Amra Prairie.</div>
            </v-card-text>
          </v-card>

          <v-card class='my-4'>
            <v-card-title>The Somber Moon</v-card-title>
            <v-card-text>
              <div>
                <a href='https://writtenrealms.com/worlds/4447/the-somber-moon'>https://writtenrealms.com/worlds/4447/the-somber-moon</a> - Seanohue
              </div>
               <div class='mt-2'>You have spent your life thus far as a gatherer in Gravel Village, scavenging from the nearby crevasse. The elders have called upon you in your sleep, in a dream. The moon has not changed phase in weeks. The mysterious temple in the desert remains.</div>
            </v-card-text>
          </v-card>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import json from "@/data/entries.json";

export default {
  name: "Entries",
  data: () => {
    return {
      entries: json,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    };
  },
};
</script>

<style>
.entry-title {
  font-family: Ubuntu;
  font-size: 48px;
  line-height: 55px;
}
.entry-title > a {
  text-decoration: none;
}
.entry-title > a:hover {
  text-decoration: underline;
}

.slide {
  padding: 30px;
  max-width: 550 px;
}
.slide > .overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
}
</style>