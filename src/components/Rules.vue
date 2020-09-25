<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <div class='page-title d-flex flex-row justify-center'>
          Rules
        </div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="11" md="10" lg="9" xl="8">

            <div class='mb-4'>
              National MUD Builders Month has no "rules" in the traditional sense but it does have criteria for fully validating a submission:              
            </div>

            <ul>
              <li>Minimum of 100 "rooms" or concepts of finite space a player can occupy.</li>
              <li>Minimum of 10 interactable&ast; NPCs</li>
            </ul>
            
            <div class='mt-4'><em>* Interactable is loose terminology. As long as the player can do something with the NPC it is considered interactable. Normally this would manifest as dialogue the player can participate in or action scripting that makes the NPC react to the player's actions or speech in some way.</em></div>

            <v-divider class="my-8"></v-divider>

            <div class='mb-4'>
              NaMuBuMo encourages participants to take their world from concept to creation within the month of October but no one has any way to validate that sort of thing. Given this is not a contest or competition we only hope everyone participating follows those parameters for their own edification.
            </div>

            <div class='mb-4'>Upon completing and submitting your work at the end you will receive a certificate of achievement and mention on the archive portion of the website of having participated and completed within that calendar year.</div>

            <!-- <div class='mb-4'>The top entry out of the worlds created on <a href='https://writtenrealms.com'>Written Realms</a> will have the option make their world multiplayer.</div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Rules",
};
</script>