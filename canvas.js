/* For Canvas */

var canvas = new fabric.Canvas('iconCanvas');

/* For Canvas */

/* For images */

var folderName = "images/gameIcons/IconList/";
var imageArray = ["iconAddon_abdominalDressing.png", "iconAddon_acidicBlood.png", "iconAddon_AdaptiveLighting.png", "iconAddon_AdiValente1.png", "iconAddon_adminWristband.png", "iconAddon_adrenalineInjector.png", "iconAddon_adrenalineVial.png", "iconAddon_AdvancedMovementPrediction.png", "iconAddon_AirFreshner.png", "iconAddon_akitosCrutch.png", "iconAddon_alchemistsRing.png", "iconAddon_amandasLetter.png", "iconAddon_amandasSecret.png", "iconAddon_amanitaToxin.png", "iconAddon_androidArm.png", "iconAddon_anxiousGasp.png", "iconAddon_apexMuffler.png", "iconAddon_ashenApple.png", "iconAddon_ashsInnards.png", "iconAddon_ataxicRespiration.png", "iconAddon_AutomaticDrawing.png", "iconAddon_automaticScrewdriver.png", "iconAddon_awardwinningChili.png", "iconAddon_babyTeeth.png", "iconAddon_badManKeepsake.png", "iconAddon_badMansLastBreath.png", "iconAddon_bagOfGears.png", "iconAddon_bandagedHaft.png", "iconAddon_bandages.png", "iconAddon_barbedWire.png", "iconAddon_barbsGlasses.png", "iconAddon_battery.png", "iconAddon_BattleaxeHead.png", "iconAddon_bayshoresCigar.png", "iconAddon_bayshoresGoldTooth.png", "iconAddon_beadCrystal.png", "iconAddon_beadGlass.png", "iconAddon_bearOil.png", "iconAddon_begrimedHead.png", "iconAddon_bentNail.png", "iconAddon_bigBuckle.png", "iconAddon_blackBox.png", "iconAddon_blackenedToenail.png", "iconAddon_blackGrease.png", "iconAddon_blackHeart.png", "iconAddon_blackIncense.png", "iconAddon_BlacksmithHammer.png", "iconAddon_blackStrap.png", "iconAddon_blightedCrow.png", "iconAddon_blightedRat.png", "iconAddon_blightedSerum.png", "iconAddon_blightedSyringe.png", "iconAddon_blondeHair.png", "iconAddon_bloodAmber.png", "iconAddon_bloodiedBlackHood.png", "iconAddon_bloodiedMud.png", "iconAddon_bloodiedWater.png", "iconAddon_bloodKraFabai.png", "iconAddon_bloodShadowDance.png", "iconAddon_bloodSwiftHunt.png", "iconAddon_bloodWindstorm.png", "iconAddon_bloodyCoil.png", "iconAddon_BloodyFingernail.png", "iconAddon_bloodySash.png", "iconAddon_blueDress.png", "iconAddon_BoatKey.png", "iconAddon_bogWater.png", "iconAddon_boneClapper.png", "iconAddon_bottleOfChloroform.png", "iconAddon_boyfriendsMemo.png", "iconAddon_brandNewPart.png", "iconAddon_brassCaseLighter.png", "iconAddon_brettsCap.png", "iconAddon_briansIntestines.png", "iconAddon_BrokenDoll.png", "iconAddon_brokenFlashlightBulb.png", "iconAddon_BrokenHilt.png", "iconAddon_brokenRecoveryCoin.png", "iconAddon_brokenSecurityKey.png", "iconAddon_BrownNoiseGenerator.png", "iconAddon_bullhorn.png", "iconAddon_burningCandle.png", "iconAddon_burningManPainting.png", "iconAddon_BurntLetters.png", "iconAddon_butterflyTape.png", "iconAddon_CabinSign.png", "iconAddon_CaffeineTablets.png", "iconAddon_CallToArms.png", "iconAddon_calmCartersNotes.png", "iconAddon_calmClassI.png", "iconAddon_calmClassII.png", "iconAddon_campbellsLastBreath.png", "iconAddon_cankerThorn.png", "iconAddon_carburetorTuningGuide.png", "iconAddon_catatonicTreasure.png", "iconAddon_catBlock.png", "iconAddon_catCarrier.png", "iconAddon_catFigurine.png", "iconAddon_catsEye.png", "iconAddon_caughtOnTape.png", "iconAddon_CerealRations.png", "iconAddon_ceremonialCandelabrum.png", "iconAddon_ChainmailFragment.png", "iconAddon_chainsawFile.png", "iconAddon_chainsBloody.png", "iconAddon_chainsGrisly.png", "iconAddon_chainsRusted.png", "iconAddon_CharcoalStick.png", "iconAddon_chatterersTooth.png", "iconAddon_cheapCologne.png", "iconAddon_cheapGinBottle.png", "iconAddon_chewedPen.png", "iconAddon_chewingTobacco.png", "iconAddon_childsWoodenSword.png", "iconAddon_chili.png", "iconAddon_chippedMonocle.png", "iconAddon_chippedSaihai.png", "iconAddon_ChocloCorn.png", "iconAddon_cigarBox.png", "iconAddon_cinderellaMusicBox.png", "iconAddon_classPhoto.png", "iconAddon_cleanRag.png", "iconAddon_clearCreekWhiskey.png", "iconAddon_cloggedIntake.png", "iconAddon_ClumpOfHair.png", "iconAddon_coarseStone.png", "iconAddon_coffeeGrinds.png", "iconAddon_coilsKit4.png", "iconAddon_coldDirt.png", "iconAddon_ColdSteelManacles.png", "iconAddon_combatStraps.png", "iconAddon_compoundSeven.png", "iconAddon_compoundThirtyThree.png", "iconAddon_compoundTwentyOne.png", "iconAddon_copperRing.png", "iconAddon_counterweight.png", "iconAddon_coxcombedClapper.png", "iconAddon_crackedPrimerBulb.png", "iconAddon_crackedSakazuki.png", "iconAddon_crackedTurtleEgg.png", "iconAddon_crateOfGears.png", "iconAddon_crematedRemains.png", "iconAddon_crewHeadset.png", "iconAddon_crewManifest.png", "iconAddon_crimsonCeremonyBook.png", "iconAddon_cryoGel.png", "iconAddon_cuttingWire.png", "iconAddon_cypressNecklet.png", "iconAddon_dadsBoots.png", "iconAddon_damagedSyringe.png", "iconAddon_darkCincture.png", "iconAddon_DarkestInk.png", "iconAddon_darkSunglasses.png", "iconAddon_deadButterfly.png", "iconAddon_deadFlyMud.png", "iconAddon_deadRabbit.png", "iconAddon_deathEngravings.png", "iconAddon_deerLung.png", "iconAddon_deerskinGloves.png", "iconAddon_defacedSmileyButton.png", "iconAddon_deniedRequisitionForm.png", "iconAddon_depletedInkRibbon.png", "iconAddon_depthGaugeRake.png", "iconAddon_DestroyedPillow.png", "iconAddon_devoteesAmulet.png", "iconAddon_diagnosticToolConstruction.png", "iconAddon_diagnosticToolRepair.png", "iconAddon_diamondStone.png", "iconAddon_diciplineCartersNotes.png", "iconAddon_diciplineClassII.png", "iconAddon_diciplineClassIII.png", "iconAddon_discardedAirFilter.png", "iconAddon_disfiguredEar.png", "iconAddon_DisortedPhoto.png", "iconAddon_dollEyes.png", "iconAddon_doomEngravings.png", "iconAddon_dragonflyWings.png", "iconAddon_driedCherryBlossom.png", "iconAddon_driedCicada.png", "iconAddon_DriedHorsemeat.png", "iconAddon_drinkingBird.png", "iconAddon_driversLicense.png", "iconAddon_dropLegKnifeSheath.png", "iconAddon_dropOfPerfume.png", "iconAddon_dullBracelet.png", "iconAddon_electricCarvingKnife.png", "iconAddon_elevensSoda.png", "iconAddon_emergencyHelmet.png", "iconAddon_emeticPotion.png", "iconAddon_engineersFang.png", "iconAddon_etchedRuler.png", "iconAddon_ether10.png", "iconAddon_ether15.png", "iconAddon_ether5.png", "iconAddon_exorcismAmulet.png", "iconAddon_ExpiredBatteries.png", "iconAddon_faceMask.png", "iconAddon_FallenShingle.png", "iconAddon_fasteningTools.png", "iconAddon_FesteringCarrion.png", "iconAddon_FieldRecorder.png", "iconAddon_filthyBlade.png", "iconAddon_filthySlippers.png", "iconAddon_fingerlessParadeGloves.png", "iconAddon_flamingHairSpray.png", "iconAddon_flaskOfBleach.png", "iconAddon_flickeringTelevision.png", "iconAddon_FlintandSteel.png", "iconAddon_flowerBabushka.png", "iconAddon_focusLens.png", "iconAddon_FollowersCowl.png", "iconAddon_foreignPlantFibers.png", "iconAddon_forestStew.png", "iconAddon_forgottenVideoTape.png", "iconAddon_foxglove.png", "iconAddon_fragileWheeze.png", "iconAddon_franksHeart.png", "iconAddon_franksMixtape.png", "iconAddon_friendshipBracelet.png", "iconAddon_fumingMixtape.png", "iconAddon_furin.png", "iconAddon_GardenofRot.png", "iconAddon_gardenRake.png", "iconAddon_garishMakeupKit.png", "iconAddon_gauseRoll.png", "iconAddon_gelDressings.png", "iconAddon_GeographicalReadout.png", "iconAddon_giftedBambooComb.png", "iconAddon_glassFragment.png", "iconAddon_gloves.png", "iconAddon_glowingConcoction.png", "iconAddon_goldChalice.png", "iconAddon_goldenEgg.png", "iconAddon_goodGuyBox.png", "iconAddon_granmasHeart.png", "iconAddon_greasedThrottle.png", "iconAddon_greasyBlackLens.png", "iconAddon_greenDress.png", "iconAddon_greenHerb.png", "iconAddon_GrimIronMask.png", "iconAddon_gripWrench.png", "iconAddon_GrittyLump.png", "iconAddon_HaddiesCalendar.png", "iconAddon_hairBow.png", "iconAddon_hairBrush.png", "iconAddon_halfEggshell.png", "iconAddon_hardHat.png", "iconAddon_harpoonGun.png", "iconAddon_headlinesCutouts.png", "iconAddon_HealingPoultice.png", "iconAddon_healingSalve.png", "iconAddon_heavyClutch.png", "iconAddon_heavyDutyBattery.png", "iconAddon_heavyPanting.png", "iconAddon_heavyWater.png", "iconAddon_helicopterStick.png", "iconAddon_hellshireIron.png", "iconAddon_hematiteSeal.png", "iconAddon_HighCurrentUpgrade.png", "iconAddon_highEndSapphireLens.png", "iconAddon_HighPowerFloodlight.png", "iconAddon_highSpeedIdlerScrew.png", "iconAddon_highStimulusElectrode.png", "iconAddon_hologramGenerator.png", "iconAddon_homemadeMuffler.png", "iconAddon_honeyLocustThorns.png", "iconAddon_honingStone.png", "iconAddon_hyperawarenessSpray.png", "iconAddon_impalingWire.png", "iconAddon_improvisedCattleProd.png", "iconAddon_incensedOintment.png", "iconAddon_infantryBelt.png", "iconAddon_InfaredUpgrade.png", "iconAddon_infectedEmetic.png", "iconAddon_InkEgg.png", "iconAddon_inkLion.png", "iconAddon_instructions.png", "iconAddon_intenseHalogen.png", "iconAddon_interlockingRazor.png", "iconAddon_interviewTape.png", "iconAddon_iridescentAmulet.png", "iconAddon_iridescentBlightTag.png", "iconAddon_iridescentBrick.png", "iconAddon_iridescentButton.png", "iconAddon_iridescentCoin.png", "iconAddon_IridescentCompanyBanner.png", "iconAddon_iridescentEngravings.png", "iconAddon_IridescentFamilyCrest.png", "iconAddon_IridescentFeather.png", "iconAddon_iridescentFlesh.png", "iconAddon_iridescentHead.png", "iconAddon_iridescentKing.png", "iconAddon_iridescentLamentConfiguration.png", "iconAddon_iridescentPendant.png", "iconAddon_iridescentQueen.png", "iconAddon_IridescentSeal.png", "iconAddon_iridescentUmbrellaBadge.png", "iconAddon_IridescentUnpublishedManuscript.png", "iconAddon_iridescentUroborosVial.png", "iconAddon_IridescentVHStape.png", "iconAddon_IridescentWoodenPlank.png", "iconAddon_iridiscentCrystalShard.png", "iconAddon_IronworkerTongs.png", "iconAddon_JacobsBabyShoes.png", "iconAddon_jawSmasher.png", "iconAddon_jennersLastBreath.png", "iconAddon_jewelBeetle.png", "iconAddon_jewelry.png", "iconAddon_jewelryBox.png", "iconAddon_jigsawsAnnotatedPlan.png", "iconAddon_jigsawsSketch.png", "iconAddon_jillSandwich.png", "iconAddon_jMyersMemorial.png", "iconAddon_joeysMixtape.png", "iconAddon_johnsMedicalFile.png", "iconAddon_judithsJournal.png", "iconAddon_judithsTombstone.png", "iconAddon_juliesMixtape.png", "iconAddon_jumpRope.png", "iconAddon_jumpRopeChucky.png", "iconAddon_juniperBonzai.png", "iconAddon_junkyardAirFilter.png", "iconAddon_kaiunTalisman.png", "iconAddon_kanaianzenTalisman.png", "iconAddon_kanesHelmet.png", "iconAddon_katanaTsuba.png", "iconAddon_kavanaghsLastBreath.png", "iconAddon_keroseneCan.png", "iconAddon_kidsBallGlove.png", "iconAddon_kidsDrawing.png", "iconAddon_kintsugiTeacup.png", "iconAddon_knifeBeltClip.png", "iconAddon_knifeScratches.png", "iconAddon_KnightContract.png", "iconAddon_labPhoto.png", "iconAddon_lambertsStarMap.png", "iconAddon_larrysBlood.png", "iconAddon_larrysRemains.png", "iconAddon_lasPlagasVariant.png", "iconAddon_lastingPerfume.png", "iconAddon_lastWill.png", "iconAddon_LavalierMicrophone.png", "iconAddon_leadRing.png", "iconAddon_leafyMash.png", "iconAddon_leatherGloves.png", "iconAddon_leatherGrip.png", "iconAddon_leatherKnifeSheath.png", "iconAddon_leatherLoop.png", "iconAddon_leatherStrip.png", "iconAddon_lengthenedJaws.png", "iconAddon_leopardPrintFabric.png", "iconAddon_leproseLichen.png", "iconAddon_lickerTongue.png", "iconAddon_lifeguardWhistle.png", "iconAddon_lightChassis.png", "iconAddon_lightWand.png", "iconAddon_LightweightGreaves.png", "iconAddon_limestoneSeal.png", "iconAddon_lionFang.png", "iconAddon_lionMedallion.png", "iconAddon_liquifiedGore.png", "iconAddon_livelyCrickets.png", "iconAddon_liveWires.png", "iconAddon_lockOfHair.png", "iconAddon_longGuideBar.png", "iconAddon_longLifeBattery.png", "iconAddon_looseCrank.png", "iconAddon_LooseScrew.png", "iconAddon_lostMemoriesBook.png", "iconAddon_lowKickbackChains.png", "iconAddon_LowPowerMode.png", "iconAddon_lowProChains.png", "iconAddon_madeleinesGlove.png", "iconAddon_madeleinesScarf.png", "iconAddon_maidenMedalliom.png", "iconAddon_makeshiftWrap.png", "iconAddon_MalthinkersSkull.png", "iconAddon_mannaGrassBraid.png", "iconAddon_mannequinFoot.png", "iconAddon_mapAddendum.png", "iconAddon_mapleKnight.png", "iconAddon_MapoftheRealms.png", "iconAddon_markedMap.png", "iconAddon_marshalsBadge.png", "iconAddon_marvinsBlood.png", "iconAddon_matchBox.png", "iconAddon_memorialFlower.png", "iconAddon_metalSaw.png", "iconAddon_metalSpoon.png", "iconAddon_mewsGuts.png", "iconAddon_mikhailsEye.png", "iconAddon_milkyGlass.png", "iconAddon_mintRag.png", "iconAddon_mirrorShard.png", "iconAddon_mirrorShards.png", "iconAddon_mischiefList.png", "iconAddon_mistyDay.png", "iconAddon_modifiedAmmoBelt.png", "iconAddon_moldyElectrode.png", "iconAddon_moltedSkin.png", "iconAddon_MortarAndPestle.png", "iconAddon_motherDaughterRing.png", "iconAddon_MothersComb.png", "iconAddon_mothersGlasses.png", "iconAddon_mothersHelpers.png", "iconAddon_MothersMirror.png", "iconAddon_mudBaikraKaeug.png", "iconAddon_mudBlink.png", "iconAddon_muddySportCap.png", "iconAddon_mudSwiftHunt.png", "iconAddon_mudWindstorm.png", "iconAddon_multipurposeHatchet.png", "iconAddon_muralSketch.png", "iconAddon_nancysMasterpiece.png", "iconAddon_nancysSketch.png", "iconAddon_nanomachineGel.png", "iconAddon_nastyBlade.png", "iconAddon_neaParasite.png", "iconAddon_needAndThread.png", "iconAddon_neverSleepPills.png", "iconAddon_nightvisionMoncular.png", "iconAddon_nutritionalSlurry.png", "iconAddon_oakHaft.png", "iconAddon_obedienceCartersNotes.png", "iconAddon_obsidianGoblet.png", "iconAddon_oddBulb.png", "iconAddon_offBrandMotorOil.png", "iconAddon_OGriefOLover.png", "iconAddon_OilPaints.png", "iconAddon_oilyCoil.png", "iconAddon_OldNewspaper.png", "iconAddon_olibanumIncense.png", "iconAddon_olsensAddressBook.png", "iconAddon_olsensJournal.png", "iconAddon_olsensWallet.png", "iconAddon_orderCartersNotes.png", "iconAddon_orderClassI.png", "iconAddon_orderClassII.png", "iconAddon_origamiCrane.png", "iconAddon_originalPain.png", "iconAddon_OttomarianWriting.png", "iconAddon_outdoorRope.png", "iconAddon_outdoorSecurityCamera.png", "iconAddon_Overcharge.png", "iconAddon_ovomorph.png", "iconAddon_paddedJaws.png", "iconAddon_paintThinner.png", "iconAddon_paperLantern.png", "iconAddon_parkersHeadband.png", "iconAddon_partyBottle.png", "iconAddon_philly.png", "iconAddon_pighouseGloves.png", "iconAddon_pileOfNails.png", "iconAddon_PillagedMead.png", "iconAddon_pillBottle.png", "iconAddon_placeboTablet.png", "iconAddon_plagueBile.png", "iconAddon_plaidFlannel.png", "iconAddon_plant43Vines.png", "iconAddon_plasticBag.png", "iconAddon_pocketWatch.png", "iconAddon_poisonOakLeaves.png", "iconAddon_polishedElectrode.png", "iconAddon_polishedMaedate.png", "iconAddon_portableSafe.png", "iconAddon_portableTV.png", "iconAddon_potentTincture.png", "iconAddon_powderedEggshell.png", "iconAddon_PowderedGlass.png", "iconAddon_powerBulb.png", "iconAddon_powerDrill.png", "iconAddon_prayerApple.png", "iconAddon_prayerBeads.png", "iconAddon_prayerRope.png", "iconAddon_prayerTabletFragment.png", "iconAddon_primerBulb.png", "iconAddon_prisonChain.png", "iconAddon_prophylacticAmulet.png", "iconAddon_protectiveGloves.png", "iconAddon_prototypeClaw.png", "iconAddon_PrototypeRotor.png", "iconAddon_puncturedMuffler.png", "iconAddon_pussyWillowCatkins.png", "iconAddon_pustulaDust.png", "iconAddon_raggedEngine.png", "iconAddon_RandomizedStrobes.png", "iconAddon_ratLiver.png", "iconAddon_ratPoison.png", "iconAddon_ratTail.png", "iconAddon_razerWire.png", "iconAddon_redheadsPinkyFinger.png", "iconAddon_redHerb.png", "iconAddon_redMoss.png", "iconAddon_redPaintBrush.png", "iconAddon_reflectiveFragment.png", "iconAddon_ReikosWatch.png", "iconAddon_RemoteControl.png", "iconAddon_renirosBloodyGlove.png", "iconAddon_restraintCartersNotes.png", "iconAddon_restraintClassII.png", "iconAddon_restraintClassIII.png", "iconAddon_retardantJelly.png", "iconAddon_reusuableCinchStraps.png", "iconAddon_ricketyChain.png", "iconAddon_RicketyPinwheel.png", "iconAddon_RingDrawing.png", "iconAddon_rinsBrokenWatch.png", "iconAddon_ripleysWatch.png", "iconAddon_robinFeather.png", "iconAddon_ropeBlack.png", "iconAddon_ropeNecklet.png", "iconAddon_ropeRed.png", "iconAddon_ropeYellow.png", "iconAddon_roseRoot.png", "iconAddon_roseTonic.png", "iconAddon_rottenGreenTripe.png", "iconAddon_rottenPumpkin.png", "iconAddon_rottingRope.png", "iconAddon_RPDShoulderWalkie.png", "iconAddon_rubberGrip.png", "iconAddon_rubbingOil.png", "iconAddon_rulesSetN2.png", "iconAddon_runningShoes.png", "iconAddon_rustColoredEgg.png", "iconAddon_rustedJaws.png", "iconAddon_rustedNeedle.png", "iconAddon_rustedSpike.png", "iconAddon_rustyAttachments.png", "iconAddon_rustyFlute.png", "iconAddon_rustyHead.png", "iconAddon_rustyShackles.png", "iconAddon_SacrificialKnife.png", "iconAddon_scalpedTopknot.png", "iconAddon_scarletEgg.png", "iconAddon_scarredHand.png", "iconAddon_scissors.png", "iconAddon_scrappedTape.png", "iconAddon_scraps.png", "iconAddon_scratchedMirror.png", "iconAddon_scratchedPearl.png", "iconAddon_scratchedRuler.png", "iconAddon_SeaSoakedCloth.png", "iconAddon_secondaryCoil.png", "iconAddon_selfAdherentWrap.png", "iconAddon_selfDestructBolt.png", "iconAddon_semioticKeyboard.png", "iconAddon_senkoHanabi.png", "iconAddon_serotoninInjector.png", "iconAddon_serratedJaws.png", "iconAddon_SeveredHands.png", "iconAddon_severedToe.png", "iconAddon_SeveredTongue.png", "iconAddon_sewerSludge.png", "iconAddon_shatteredStarsBadge.png", "iconAddon_shatteredSyringe.png", "iconAddon_shatteredWakizashi.png", "iconAddon_sheepBlock.png", "iconAddon_ShiawaseAmulet.png", "iconAddon_shinyPin.png", "iconAddon_shopLubricant.png", "iconAddon_ShotgunSpeakers.png", "iconAddon_shreddedNotes.png", "iconAddon_silencingCloth.png", "iconAddon_silkPillow.png", "iconAddon_SilverBell.png", "iconAddon_skeweredRat.png", "iconAddon_sliceofFrank.png", "iconAddon_slowReleaseToxin.png", "iconAddon_smellyInnerSoles.png", "iconAddon_smileyFaceButton.png", "iconAddon_snakeOil.png", "iconAddon_socketSwivels.png", "iconAddon_soldiersPuttee.png", "iconAddon_solventJug.png", "iconAddon_somaFamilyPhoto.png", "iconAddon_sootShadowDance.png", "iconAddon_sootTheBeast.png", "iconAddon_sootTheGhost.png", "iconAddon_sootTheHound.png", "iconAddon_sootTheSerpent.png", "iconAddon_soulChemical.png", "iconAddon_souredMilk.png", "iconAddon_sparkPlug.png", "iconAddon_spasmodicBreath.png", "iconAddon_spearhead.png", "iconAddon_speedLimiter.png", "iconAddon_spentOxygenTank.png", "iconAddon_spikedBoots.png", "iconAddon_spinningTop.png", "iconAddon_spiritAllSeeing.png", "iconAddon_spiritOfHartshorn.png", "iconAddon_spitPolishRag.png", "iconAddon_splinteredHull.png", "iconAddon_spoiledMeal.png", "iconAddon_sponge.png", "iconAddon_spoolOfWire.png", "iconAddon_springClamp.png", "iconAddon_stabWoundsStudy.png", "iconAddon_staleBiscuit.png", "iconAddon_stampOdd.png", "iconAddon_stampUnusual.png", "iconAddon_starlingFeather.png", "iconAddon_starsFieldCombatManual.png", "iconAddon_steelToeBoots.png", "iconAddon_StereoRemoteMic.png", "iconAddon_stickyLining.png", "iconAddon_stickySodaBottle.png", "iconAddon_StillLifeCrow.png", "iconAddon_stolenSketchbook.png", "iconAddon_straightRazor.png", "iconAddon_strobingLight.png", "iconAddon_stypticAgent.png", "iconAddon_sulfuricAcidVial.png", "iconAddon_summoningStone.png", "iconAddon_surgicalSuture.png", "iconAddon_suziesMixtape.png", "iconAddon_swampOrchidNecklet.png", "iconAddon_swingChains.png", "iconAddon_syringe.png", "iconAddon_tabletOfTheOppressor.png", "iconAddon_tackyEarrings.png", "iconAddon_tamperedTimer.png", "iconAddon_TapeEditingDeck.png", "iconAddon_tarBottle.png", "iconAddon_TatteredTabard.png", "iconAddon_tattoosMiddleFinger.png", "iconAddon_tearSoakedTenugui.png", "iconAddon_Telephone.png", "iconAddon_telephotoLens.png", "iconAddon_tensionSpring.png", "iconAddon_theBeastsMark.png", "iconAddon_theGrease.png", "iconAddon_theLegionButton.png", "iconAddon_thermalCasing.png", "iconAddon_theThompsonsMix.png", "iconAddon_thickCorkStopper.png", "iconAddon_ThickTar.png", "iconAddon_thompsonsMoonshine.png", "iconAddon_ThornyNest.png", "iconAddon_thornyVines.png", "iconAddon_threadedFilament.png", "iconAddon_TilingBlade.png", "iconAddon_tinOilCan.png", "iconAddon_tinyFingernail.png", "iconAddon_tinyScalpel.png", "iconAddon_tirOptic.png", "iconAddon_tokenErroded.png", "iconAddon_tokenGold.png", "iconAddon_tombstonePiece.png", "iconAddon_tornBookmark.png", "iconAddon_torturePillar.png", "iconAddon_TownWatctTorch.png", "iconAddon_toySword.png", "iconAddon_trapperBag.png", "iconAddon_trapperGloves.png", "iconAddon_trapperSack.png", "iconAddon_TreatedBlade.png", "iconAddon_tuftOfHair.png", "iconAddon_tunedCarburetor.png", "iconAddon_TVirusSample.png", "iconAddon_tyrantGore.png", "iconAddon_uchiwa.png", "iconAddon_ultrasonicSensor.png", "iconAddon_UltrasonicTrapSpeaker.png", "iconAddon_umbraSalts.png", "iconAddon_unicornBlock.png", "iconAddon_unicornMedallion.png", "iconAddon_uniqueRing.png", "iconAddon_unknownEgg.png", "iconAddon_UntitledAgony.png", "iconAddon_upsidedownResin.png", "iconAddon_uroborosTendril.png", "iconAddon_utilityBlades.png", "iconAddon_valtielSectPhotograph.png", "iconAddon_vanityMirror.png", "iconAddon_VCR.png", "iconAddon_vegetableOil.png", "iconAddon_VelvetFabric.png", "iconAddon_venomousConcoction.png", "iconAddon_vermillionWebcap.png", "iconAddon_VhsCopy.png", "iconAddon_vhsPorn.png", "iconAddon_VibrantObituary.png", "iconAddon_victimsDetailedRoutine.png", "iconAddon_victorsSoldier.png", "iconAddon_videoConferenceDevice.png", "iconAddon_videoTape.png", "iconAddon_vigosJournal.png", "iconAddon_vileEmetic.png", "iconAddon_violetWaxcap.png", "iconAddon_viscousWebbing.png", "iconAddon_visitorWristband.png", "iconAddon_VitalTargetingProcessor.png", "iconAddon_wakizashiSaya.png", "iconAddon_walleyesMatchbook.png", "iconAddon_wantedPoster.png", "iconAddon_wardensKeys.png", "iconAddon_WarHelmet.png", "iconAddon_waterloggedShoe.png", "iconAddon_waxBrick.png", "iconAddon_waxDoll.png", "iconAddon_weavedRing.png", "iconAddon_weightedHead.png", "iconAddon_weightyRattle.png", "iconAddon_WellStone.png", "iconAddon_WellWater.png", "iconAddon_whiteBlindWarrior.png", "iconAddon_whiteBlink.png", "iconAddon_whiteHairRibbon.png", "iconAddon_whiteKuntinTakkho.png", "iconAddon_whiteNitComb.png", "iconAddon_whiteShadowDance.png", "iconAddon_whiteWindstorm.png", "iconAddon_wideLens.png", "iconAddon_willowWreath.png", "iconAddon_woodenFox.png", "iconAddon_woodenHorse.png", "iconAddon_woodenOniMask.png", "iconAddon_WoodenPlank.png", "iconAddon_woolShirt.png", "iconAddon_workshopGrease.png", "iconAddon_WorryStones.png", "iconAddon_worshipTablet.png", "iconAddon_wrigglingMaggots.png", "iconAddon_yakuyokeAmulet.png", "iconAddon_yamaokaSashimono.png", "iconAddon_yardstick.png", "iconAddon_yellowedCloth.png", "iconAddon_YoichisFishingNet.png", "iconAddon_zBlock.png", "iconAddon_zombieHeart.png", "iconAddon_zori.png", "iconFavors_4thAnniversary.png", "iconFavors_5thAnniversary.png", "iconFavors_6thAnniversary.png", "iconFavors_7thAnniversary.png", "iconFavors_airlockDoors.png", "iconFavors_alienFlora.png", "iconFavors_annotatedBlueprint.png", "iconFavors_ArcaneDowsingRod.png", "iconFavors_ardentRavenWreath.png", "iconFavors_ardentShrikeWreath.png", "iconFavors_ardentSpottedOwlWreath.png", "iconFavors_ardentTanagerWreath.png", "iconFavors_azarovsKey.png", "iconFavors_bbqInvitation.png", "iconFavors_BeefTallowMixture.png", "iconFavors_blackSaltStatuette.png", "iconFavors_blackSplinter.png", "iconFavors_BlackTea.png", "iconFavors_BlankPostcard.png", "iconFavors_bloodiedBlueprint.png", "iconFavors_BloodstoneChalice.png", "iconFavors_bloodyPartyStreamers.png", "iconFavors_bogLaurelSachet.png", "iconFavors_BoneDoll.png", "iconFavors_boneSplinter.png", "iconFavors_boundEnvelope.png", "iconFavors_BurdockTea.png", "iconFavors_cattleTag28.png", "iconFavors_cattleTag81.png", "iconFavors_CeramicChalice.png", "iconFavors_chalkPouch.png", "iconFavors_charredWeddingPhotograph.png", "iconFavors_childrensBook.png", "iconFavors_ClayDoll.png", "iconFavors_clearReagent.png", "iconFavors_CopperChalice.png", "iconFavors_creamChalkPouch.png", "iconFavors_crecentMoonBouquet.png", "iconFavors_crispleafAmaranthSachet.png", "iconFavors_crowsEye.png", "iconFavors_CrumpledPostcard.png", "iconFavors_CursedSeed.png", "iconFavors_cutCoin.png", "iconFavors_damagedPhoto.png", "iconFavors_decrepitClapboard.png", "iconFavors_devoutRavenWreath.png", "iconFavors_devoutShrikeWreath.png", "iconFavors_devoutSpottedOwlWreath.png", "iconFavors_devoutTanagerWreath.png", "iconFavors_dustyNoose.png", "iconFavors_emergencyCertificate.png", "iconFavors_escapeCake.png", "iconFavors_faintReagent.png", "iconFavors_FleshDoll.png", "iconFavors_fragrantBogLaurel.png", "iconFavors_fragrantCrispleafAmaranth.png", "iconFavors_fragrantPrimroseBlossom.png", "iconFavors_fragrantSweetWilliam.png", "iconFavors_freshBogLaurel.png", "iconFavors_freshCrispleafAmaranth.png", "iconFavors_freshPrimroseBlossom.png", "iconFavors_freshSweetWilliam.png", "iconFavors_fullMoonBouquet.png", "iconFavors_fumingCordage.png", "iconFavors_fumingWelcomeSign.png", "iconFavors_glassSplinter.png", "iconFavors_graduationCap.png", "iconFavors_granmasCookbook.png", "iconFavors_gruesomeGateau.png", "iconFavors_harvestFestivalLeaflet.png", "iconFavors_hawkinsNationalLaboratoryID.png", "iconFavors_hazyReagent.png", "iconFavors_heartLocket.png", "iconFavors_hollowShell.png", "iconFavors_IchorousLoam.png", "iconFavors_ivoryChalkPouch.png", "iconFavors_jarOfSaltyLips.png", "iconFavors_jigsawPiece.png", "iconFavors_LotusLeafTea.png", "iconFavors_LoversPostcard.png", "iconFavors_lunacyTicket.png", "iconFavors_macmillianLedgerPage.png", "iconFavors_macmilliansPhalanxBone.png", "iconFavors_marysLetter.png", "iconFavors_MilkTea.png", "iconFavors_moldyOak.png", "iconFavors_momentoMoriCypress.png", "iconFavors_momentoMoriEbony.png", "iconFavors_momentoMoriIvory.png", "iconFavors_muddySplinter.png", "iconFavors_murkyReagent.png", "iconFavors_newMoonBouquet.png", "iconFavors_paintedRiverRock.png", "iconFavors_pElliottLunacyTicket.png", "iconFavors_petrifiedOak.png", "iconFavors_plateShredded.png", "iconFavors_plateVirginia.png", "iconFavors_primroseBlossomSachet.png", "iconFavors_psychiatricAssessmentReport.png", "iconFavors_pustulaPetals.png", "iconFavors_putridOak.png", "iconFavors_quarterMoonBouquet.png", "iconFavors_ravenWreath.png", "iconFavors_redMoneyPacket.png", "iconFavors_rottenOak.png", "iconFavors_RPDBadge.png", "iconFavors_saltPouch.png", "iconFavors_scratchedCoin.png", "iconFavors_sealedEnvelope.png", "iconFavors_ShatteredBottle.png", "iconFavors_shatteredGlasses.png", "iconFavors_shinyCoin.png", "iconFavors_shockSplinter.png", "iconFavors_shrikeWreath.png", "iconFavors_shroudOfBinding.png", "iconFavors_shroudOfSeparation.png", "iconFavors_shroudOfUnion.png", "iconFavors_signedLedgerPage.png", "iconFavors_smokingSplinter.png", "iconFavors_spottedOwlWreath.png", "iconFavors_StampedPostcard.png", "iconFavors_strodeRealtyKey.png", "iconFavors_survivorPudding.png", "iconFavors_sweetWilliamSachet.png", "iconFavors_tanagerWreath.png", "iconFavors_tarnishedCoin.png", "iconFavors_theLastMask.png", "iconFavors_thePiedPiper.png", "iconFavors_ThornDoll.png", "iconFavors_tornBlueprint.png", "iconFavors_vigosBlueprint.png", "iconFavors_vigosShroud.png", "iconFavors_wardBlack.png", "iconFavors_wardSacrificial.png", "iconFavors_wardWhite.png", "iconFavors_WoodenChalice.png", "iconFavors_yamaokasCrest.png", "iconHelpLoading_steamPipe.png", "iconItems_Keycard.png", "iconItems_LimitedTurret.png", "iconPerks_aceInTheHole.png", "iconPerks_adrenaline.png", "iconPerks_aftercare.png", "iconPerks_agitation.png", "iconPerks_alert.png", "iconPerks_AlienInstinct.png", "iconPerks_aNursesCalling.png", "iconPerks_anyMeansNecessary.png", "iconPerks_appraisal.png", "iconPerks_autodidact.png", "iconPerks_AwakenedAwarenesss.png", "iconPerks_babySitter.png", "iconPerks_BackgroundPlayer.png", "iconPerks_balancedLanding.png", "iconPerks_bamboozle.png", "iconPerks_batteriesIncluded.png", "iconPerks_BBQAndChili.png", "iconPerks_BeastOfPrey.png", "iconPerks_BetterThanNew.png", "iconPerks_betterTogether.png", "iconPerks_BiteTheBullet.png", "iconPerks_bitterMurmur.png", "iconPerks_blastMine.png", "iconPerks_bloodEcho.png", "iconPerks_bloodhound.png", "iconPerks_bloodPact.png", "iconPerks_BloodRush.png", "iconPerks_bloodWarden.png", "iconPerks_boilOver.png", "iconPerks_bond.png", "iconPerks_BoonCircleOfHealing.png", "iconPerks_BoonDestroyer.png", "iconPerks_BoonExponential.png", "iconPerks_BoonShadowStep.png", "iconPerks_borrowedTime.png", "iconPerks_botanyKnowledge.png", "iconPerks_breakdown.png", "iconPerks_breakout.png", "iconPerks_brutalStrength.png", "iconPerks_buckleUp.png", "iconPerks_builtToLast.png", "iconPerks_callOfBrine.png", "iconPerks_calmSpirit.png", "iconPerks_camaraderie.png", "iconPerks_ChampionOfLight.png", "iconPerks_ChemicalTrap.png", "iconPerks_Clairvoyance.png", "iconPerks_CorrectiveAction.png", "iconPerks_corruptIntervention.png", "iconPerks_coulrophobia.png", "iconPerks_Counterforce.png", "iconPerks_coupDeGrace.png", "iconPerks_cruelConfinement.png", "iconPerks_CutLoose.png", "iconPerks_danceWithMe.png", "iconPerks_darkDevotion.png", "iconPerks_DarknessRevelated.png", "iconPerks_darkSense.png", "iconPerks_darkTheory.png", "iconPerks_DeadHard.png", "iconPerks_Deadline.png", "iconPerks_Deadlock.png", "iconPerks_deadManSwitch.png", "iconPerks_deathbound.png", "iconPerks_deception.png", "iconPerks_decisiveStrike.png", "iconPerks_deerstalker.png", "iconPerks_dejaVu.png", "iconPerks_deliverance.png", "iconPerks_desperateMeasures.png", "iconPerks_detectivesHunch.png", "iconPerks_devourHope.png", "iconPerks_discordance.png", "iconPerks_Dissolution.png", "iconPerks_distortion.png", "iconPerks_distressing.png", "iconPerks_diversion.png", "iconPerks_dragonsGrip.png", "iconPerks_Dramaturgy.png", "iconPerks_dyingLight.png", "iconPerks_empathicConnection.png", "iconPerks_empathy.png", "iconPerks_enduring.png", "iconPerks_eruption.png", "iconPerks_FastTrack.png", "iconPerks_fireUp.png", "iconPerks_fixated.png", "iconPerks_Flashbang.png", "iconPerks_flipFlop.png", "iconPerks_floodOfRage.png", "iconPerks_Fogwise.png", "iconPerks_ForcedHesitation.png", "iconPerks_forcedPenance.png", "iconPerks_forThePeople.png", "iconPerks_franklinsLoss.png", "iconPerks_FriendlyCompetition.png", "iconPerks_friendsTillTheEnd.png", "iconPerks_furtiveChase.png", "iconPerks_GameAfoot.png", "iconPerks_gearHead.png", "iconPerks_generatorOvercharge.png", "iconPerks_GeneticLimits.png", "iconPerks_grimEmbrace.png", "iconPerks_guardian.png", "iconPerks_hangmansTrick.png", "iconPerks_hatred.png", "iconPerks_hauntedGround.png", "iconPerks_headOn.png", "iconPerks_hexBloodFavor.png", "iconPerks_HexCrowdControl.png", "iconPerks_HexFaceTheDarkness.png", "iconPerks_hexPentimento.png", "iconPerks_HexPlaything.png", "iconPerks_hexRetribution.png", "iconPerks_hexUndying.png", "iconPerks_Hoarder.png", "iconPerks_hope.png", "iconPerks_Hubris.png", "iconPerks_HuntressLullaby.png", "iconPerks_Hyperfocus.png", "iconPerks_hysteria.png", "iconPerks_Illumination.png", "iconPerks_imAllEars.png", "iconPerks_infectiousFright.png", "iconPerks_InnerFocus.png", "iconPerks_innerStrength.png", "iconPerks_insidious.png", "iconPerks_ironGrasp.png", "iconPerks_ironMaiden.png", "iconPerks_ironWill.png", "iconPerks_kindred.png", "iconPerks_knockOut.png", "iconPerks_leader.png", "iconPerks_leftBehind.png", "iconPerks_lethalPursuer.png", "iconPerks_Leverage.png", "iconPerks_lightborn.png", "iconPerks_LightFooted.png", "iconPerks_lightweight.png", "iconPerks_lithe.png", "iconPerks_LowProfile.png", "iconPerks_luckyBreak.png", "iconPerks_LuckyStar.png", "iconPerks_madeForThis.png", "iconPerks_madGrit.png", "iconPerks_makeYourChoice.png", "iconPerks_mercilessStorm.png", "iconPerks_mettleOfMan.png", "iconPerks_mindBreaker.png", "iconPerks_monitorAndAbuse.png", "iconPerks_monstrousShrine.png", "iconPerks_nemesis.png", "iconPerks_NoMither.png", "iconPerks_noOneEscapesDeath.png", "iconPerks_noOneLeftBehind.png", "iconPerks_NoWayOut.png", "iconPerks_NowhereToHide.png", "iconPerks_objectOfObsession.png", "iconPerks_offTheRecord.png", "iconPerks_openHanded.png", "iconPerks_Oppression.png", "iconPerks_Overcome.png", "iconPerks_overwhelmingPresence.png", "iconPerks_Overzealous.png", "iconPerks_painResonance.png", "iconPerks_parentalGuidance.png", "iconPerks_pharmacy.png", "iconPerks_playWithYourFood.png", "iconPerks_PlotTwist.png", "iconPerks_plunderersInstinct.png", "iconPerks_poised.png", "iconPerks_popGoesTheWeasel.png", "iconPerks_PotentialEnergy.png", "iconPerks_powerStruggle.png", "iconPerks_predator.png", "iconPerks_premonition.png", "iconPerks_proveThyself.png", "iconPerks_pushThroughIt.png", "iconPerks_quickAndQuiet.png", "iconPerks_RapidBrutality.png", "iconPerks_ReactiveHealing.png", "iconPerks_Reassurance.png", "iconPerks_redHerring.png", "iconPerks_rememberMe.png", "iconPerks_repressedAlliance.png", "iconPerks_ResidualManifest.png", "iconPerks_resilience.png", "iconPerks_Resurgence.png", "iconPerks_RookieSpirit.png", "iconPerks_ruin.png", "iconPerks_saboteur.png", "iconPerks_saveTheBestForLast.png", "iconPerks_scavenger.png", "iconPerks_ScenePartner.png", "iconPerks_ScourgeHookGiftOfPain.png", "iconPerks_secondWind.png", "iconPerks_Self-Preservation.png", "iconPerks_SelfAware.png", "iconPerks_selfCare.png", "iconPerks_SepticTouch.png", "iconPerks_shadowborn.png", "iconPerks_situationalAwareness.png", "iconPerks_slipperyMeat.png", "iconPerks_sloppyButcher.png", "iconPerks_smallGame.png", "iconPerks_SmashHit.png", "iconPerks_soleSurvivor.png", "iconPerks_solidarity.png", "iconPerks_soulGuard.png", "iconPerks_spiesFromTheShadows.png", "iconPerks_spineChill.png", "iconPerks_spiritFury.png", "iconPerks_sprintBurst.png", "iconPerks_stakeOut.png", "iconPerks_Starstruck.png", "iconPerks_streetwise.png", "iconPerks_stridor.png", "iconPerks_SuperiorAnatomy.png", "iconPerks_surge.png", "iconPerks_surveillance.png", "iconPerks_survivalInstincts.png", "iconPerks_TeamworkCollectiveStealth.png", "iconPerks_TeamworkPowerOfTwo.png", "iconPerks_technician.png", "iconPerks_tenacity.png", "iconPerks_Terminus.png", "iconPerks_TerritorialImperative.png", "iconPerks_thatanophobia.png", "iconPerks_theThirdSeal.png", "iconPerks_thisIsNotHappening.png", "iconPerks_thrillingTremors.png", "iconPerks_thrillOfTheHunt.png", "iconPerks_Thwack.png", "iconPerks_tinkerer.png", "iconPerks_trailOfTorment.png", "iconPerks_troubleshooter.png", "iconPerks_twoCanPlay.png", "iconPerks_UltimateWeapon.png", "iconPerks_unbreakable.png", "iconPerks_unnervingPresence.png", "iconPerks_unrelenting.png", "iconPerks_upTheAnte.png", "iconPerks_urbanEvasion.png", "iconPerks_vigil.png", "iconPerks_visionary.png", "iconPerks_VittoriosGambit.png", "iconPerks_wakeUp.png", "iconPerks_wellMakeIt.png", "iconPerks_WereGonnaLiveForever.png", "iconPerks_whispers.png", "iconPerks_windowsOfOpportunity.png", "iconPerks_Wiretap.png", "iconPerks_zanshinTactics.png", "iconPowers_bell.png", "iconPowers_blackenedCatalyst.png", "iconPowers_breath.png", "iconPowers_bubbasChainsaw.png", "iconPowers_cartersSpark.png", "iconPowers_chainsaw.png", "iconPowers_chainsawCharge.png", "iconPowers_delugeOfFear.png", "iconPowers_delugeOfFear2.png", "iconPowers_dreamMaster.png", "iconPowers_drones.png", "iconPowers_feralFrenzy.png", "iconPowers_gasBomb.png", "iconPowers_gasBomb2.png", "iconPowers_hiddenPursuit_active.png", "iconPowers_hiddenPursuit_inactive.png", "iconPowers_huntingHatchets.png", "iconPowers_K21.png", "iconPowers_K34.png", "iconPowers_K34_TipToe.png", "iconPowers_ofTheAbyss.png", "iconPowers_quantumInstantiation.png", "iconPowers_reverseBearTrap.png", "iconPowers_Showstopper_01.png", "iconPowers_Showstopper_02.png", "iconPowers_stalker1.png", "iconPowers_stalker2.png", "iconPowers_stalker3.png", "iconPowers_summonsOfPain.png", "iconPowers_T-virus1.png", "iconPowers_T-virus2.png", "iconPowers_T-virus3.png", "iconPowers_Tantrum.png", "iconPowers_track.png", "iconPowers_trap.png", "iconPowers_UK.png", "iconPowers_vilePurge.png", "iconPowers_virulentBound.png", "iconPowers_yamaokasHaunting.png", "iconPowers_yamaokasWrath.png", "iconStatusEffects_bleeding.png", "iconStatusEffects_blessed.png", "iconStatusEffects_bloodLust.png", "iconStatusEffects_broken.png", "iconStatusEffects_cleansing.png", "iconStatusEffects_deepWound.png", "iconStatusEffects_endurance.png", "iconStatusEffects_exhausted.png", "iconStatusEffects_expertise.png", "iconStatusEffects_exposed.png", "iconStatusEffects_glyph.png", "iconStatusEffects_healing.png", "iconStatusEffects_hearing.png", "iconStatusEffects_hindered.png", "iconStatusEffects_incapacitated.png", "iconStatusEffects_killerEndurance.png", "iconStatusEffects_luck.png", "iconStatusEffects_madness.png", "iconStatusEffects_mangled.png", "iconStatusEffects_mori.png", "iconStatusEffects_oblivious.png", "iconStatusEffects_progressionSpeed.png", "iconStatusEffects_repairing.png", "iconStatusEffects_sabotaging.png", "iconStatusEffects_skillCheckDifficulty.png", "iconStatusEffects_skillCheckProbability.png", "iconStatusEffects_skills.png", "iconStatusEffects_sleepPenalty.png", "iconStatusEffects_speed.png", "iconStatusEffects_undetectable.png", "iconStatusEffects_vision.png"];
//var imageArray = [];

// works on local host
// const xhr = new XMLHttpRequest();
// xhr.open('GET', folderName);
// xhr.onload = function() {
//     const parser = new DOMParser();
//     const html = parser.parseFromString(xhr.responseText, 'text/html');
//     const links = html.getElementsByTagName('a');
//     for (let i = 0; i < links.length; i++) {
//         const link = links[i];
//         const href = link.getAttribute('href');
//         if (href && !href.startsWith('?')) {
//             const fileName = decodeURIComponent(href.split('/').pop());
//             imageArray.push(fileName);
//             console.log(fileName);
//         }
//     }
//     imageArray.shift();
//     imageArray.pop();
//     for (i=0; i<imageArray.length; i++) {
//         console.log(i + " " + imageArray[i]);
//     }
//     //console.log("array: " + imageArray);

//     loadImagesForCanvas();
// };
// xhr.send();

// var imageArray = [
//     "iconPerks_saboteur.png", "iconPerks_selfCare.png", "iconPerks_shadowborn.png", "iconPerks_slipperyMeat.png",
//     "iconAddon_babyTeeth.png", "iconAddon_bloodiedBlackHood.png", "iconAddon_catFigurine.png", "iconAddon_dropOfPerfume.png", "iconAddon_forestStew.png",
//     "iconPowers_bubbasChainsaw.png", "iconPowers_Tantrum.png",
//     "iconFavors_azarovsKey.png", "iconFavors_blackSaltStatuette.png",
//     "iconStatusEffects_bleeding.png", "iconStatusEffects_blessed.png"
// ];
// var folderName = "images/gameIcons/testIcons/";
var imageArrayTitle = [];

const div = document.getElementById("iconDiv"); // Replace "myDiv" with the ID of your HTML div element

function loadImagesForCanvas() {
    for (i = 0; i < imageArray.length; i++) {
        //console.log("adding image " + imageArray[i]);
        const img = document.createElement("img");
        img.alt = imageArray[i];
        img.src = folderName + imageArray[i];
        var title = imageArray[i].replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
        title = title.slice(title.indexOf("_") + 1, -4);
        img.title = title;
        img.classList.add("iconDisplayedInDiv");
        img.addEventListener("click", function() {
            addIconToCanvas(this.alt);
        })
        div.appendChild(img);

        imageArrayTitle.push(title);
        //create another array to hold title
    }
}

loadImagesForCanvas();

function addIconToCanvas(iconName) {
    tempCanvasBackgroundFix();

    console.log(imageArray);
    console.log("Clicked icon:", iconName);

    var imageSRC = folderName + iconName;
    fabric.Image.fromURL(imageSRC, function(img) {
        img.scaleToWidth(400);
        img.scaleToHeight(400);
        canvas.add(img);
    });
}

function sendIconBack() {
    var object = canvas.getActiveObject();
    canvas.sendBackwards(object);
}

function sendIconForward() {
    var object = canvas.getActiveObject();
    canvas.bringForward(object);
}

function deleteIconFunction() {
    var object = canvas.getActiveObject();
    if (!object){
        alert('Please select an element to remove.');
        return '';
    }
    canvas.remove(object);
}

/* For Images */

/* For Drawing */
var toggleDrawingButton = document.getElementById("toggleDrawing");
var drawingOptionsDisplay = document.getElementById("drawingButtons");
var drawingLineWidthSlider = document.getElementById("drawingLineWidth");
var drawingColorInput = document.getElementById("drawingColor");

canvas.isDrawingMode = false;
drawingButtons.style.display = 'none';
canvas.freeDrawingBrush.width = 15;

toggleDrawingButton.addEventListener("click", function() {
    //canvas.freeDrawingBrush = fabric.PencilBrush(canvas);
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
        toggleDrawingButton.style.backgroundColor = "rgb(110, 63, 9)";
        toggleDrawingButton.innerHTML = 'Turn Off Drawing';
        drawingButtons.style.display = '';
    }
    else {
        toggleDrawingButton.style.backgroundColor = "rgb(170, 100, 19)";
        toggleDrawingButton.innerHTML = 'Turn On Drawing';
        drawingButtons.style.display = 'none';
    }
});

function changeSliderByOne(value) {
    if ((canvas.freeDrawingBrush.width == 1 && value == -1) || (canvas.freeDrawingBrush.width == 150 && value == 1)) {
        return;
    }
    else {
        canvas.freeDrawingBrush.width += value;
        document.getElementById("lineWidthDisplay").innerHTML = canvas.freeDrawingBrush.width;
        drawingLineWidthSlider.value = canvas.freeDrawingBrush.width;
    }
}

drawingLineWidthSlider.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
    document.getElementById("lineWidthDisplay").innerHTML = this.value;
};

drawingColorInput.onchange = function() {
    var brush = canvas.freeDrawingBrush;
    brush.color = this.value;
    if (brush.getPatternSrc) {
        brush.source = brush.getPatternSrc.call(brush);
    }
};

//search bar
function searchThroughIcons() {
    const input = document.getElementById("search");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("iconDiv");
    div.innerHTML = "";

    for (let i = 0; i < imageArray.length; i++) {
        const alt = imageArrayTitle[i].split(".")[0];
        for (j = 0; j < filterOptions.length; j++) {
            if (imageArray[i].slice(0, imageArray[i].indexOf("_")) == filterOptions[j].title && filterOptions[j].isChecked == "true") {
                if (alt.toUpperCase().includes(filter)) {
                    const img = document.createElement("img");
                    img.alt = imageArray[i];
                    img.src = folderName + imageArray[i];
                    var title = imageArray[i].replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
                    title = title.slice(title.indexOf("_") + 1, -4);
                    img.title = title;
                    img.classList.add("iconDisplayedInDiv");
                    img.addEventListener("click", function() {
                        addIconToCanvas(this.alt);
                    })
                    div.appendChild(img);
                }
            }
        }
    }
}

// Filter Buttons Functinality

const filterOptions = [
    {title: "iconPerks", name: "Perks", isChecked: "true"},
    {title: "iconAddon", name: "Addons", isChecked: "true"},
    {title: "iconPowers", name: "Powers", isChecked: "true"},
    {title: "iconFavors", name: "Offerings", isChecked: "true"}, 
    {title: "iconStatusEffects", name: "Status", isChecked: "true"}
];
const checkboxes = document.querySelectorAll(".filterButton");

checkboxes.forEach(checkbox => {
    // Inside the event listener for checkboxes
    checkbox.addEventListener("change", function () {
        // update search results when checking
        document.getElementById("search").value = "";
        searchThroughIcons();

        const isChecked = this.checked;
        const filterOption = filterOptions.find(option => option.title === checkbox.value);

        // Update the isChecked property based on the checkbox state
        filterOption.isChecked = isChecked ? "true" : "false";

        // Clear the existing content in the div
        div.innerHTML = "";

        // Filter and display images based on the updated filterOptions
        for (i = 0; i < imageArray.length; i++) {
            const imageName = imageArray[i].slice(0, imageArray[i].indexOf("_"));
            const isFilterChecked = filterOptions.find(option => option.title === imageName)?.isChecked === "true";

            if (isFilterChecked) {
                const img = document.createElement("img");
                img.alt = imageArray[i];
                img.src = folderName + imageArray[i];
                var title = imageArray[i].replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
                title = title.slice(title.indexOf("_") + 1, -4);
                img.title = title;
                img.classList.add("iconDisplayedInDiv");
                img.addEventListener("click", function () {
                    addIconToCanvas(this.alt);
                })
                div.appendChild(img);
            }
        }

        console.log(`${checkbox.value} is ${isChecked ? "checked" : "unchecked"}`);
    });
});


/* For Drawing */

/* changing canvas background */
function handleBackgroundDropdownChange() {
    console.log("A");
    var dropdown = document.getElementById("backgroundDropdown");
    var selectedIndex = dropdown.value;
    console.log("value: " + selectedIndex);
    changeCanvasBackground(selectedIndex);
}

function handleBackgroundDropdownChange(dar) {
    console.log("T: " + dar.value);
}

var tempVariableForIconBackgroundLoading = true;
function tempCanvasBackgroundFix() {
    // Temp fix to having the background image appear right away (it only appears after another button has been pressed and before an image has been added)
    if (tempVariableForIconBackgroundLoading) {
        var button = document.getElementById("deleteIconButton");
        button.click();
        tempVariableForIconBackgroundLoading = false;
    }
}
// No background, purple perk, teachable, killer power, addon colors
function changeCanvasBackground(item) {
    
    tempCanvasBackgroundFix();

    console.log("item: " + item);
    tempCanvas = document.getElementById("iconCanvas");
    if (item == 0) {
        tempCanvas.style.backgroundImage = "";
    } else if (item == 1) {
        tempCanvas.style.backgroundImage = "url('images/teachablePerk.png')";
    } else if (item == 2) {
        tempCanvas.style.backgroundImage = "url('images/blankTemplates/very rare.png')";
    } else if (item == 3) {
        tempCanvas.style.backgroundImage = "url('images/killerPower.png')";
    } else if (item == 4) {
        tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/commonAddon.png')";
    } else if (item == 5) {
        tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/uncommonAddon.png')";
    } else if (item == 6) {
        tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/rareAddon.png')";
    } else if (item == 7) {
        tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/veryRareAddon.png')";
    } else if (item == 8) {
        tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/iridescentAddon.png')";
    } else if (item == 9) {
        tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/eventAddon.png')";
    } else {
        console.log("Something went wrong.");
    }
    // switch(parseInt(item.value)) {
    //     case 0:
    //         tempCanvas.style.backgroundImage = "";
    //         break;
    //     case 1:
    //         tempCanvas.style.backgroundImage = "url('images/teachablePerk.png')";
    //         console.log("AAAA");
    //         break;
    //     case 2:
    //         tempCanvas.style.backgroundImage = "url('images/blankTemplates/very rare.png')";
    //         break;
    //     case 3:
    //         tempCanvas.style.backgroundImage = "url('images/killerPower.png')";
    //         break;
    //     case 4:
    //         tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/commonAddon.png')";
    //         break;
    //     case 5:
    //         tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/uncommonAddon.png')";
    //         break;
    //     case 6:
    //         tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/rareAddon.png')";
    //         break;
    //     case 7:
    //         tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/veryRareAddon.png')";
    //         break;
    //     case 8:
    //         tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/iridescentAddon.png')";
    //         break;
    //     case 9:
    //         tempCanvas.style.backgroundImage = "url('images/blankTemplates/Addons/eventAddon.png')";
    //         break;
    //     default:
    //         console.log("Something went wrong.");
    //         break;
    // }
    // if (item == 0) {
    //     tempCanvas.style.backgroundImage = "url('images/teachablePerk.png')";
    // }
    // else if (item == 1) {
    //     tempCanvas.style.backgroundImage = "url('images/killerPower.png')";
    // }
    // else if (item == 2) {
    //     tempCanvas.style.backgroundImage = "";
    // }
}

/* changing canvas background */

/* Eraser */

var toggleEraserButton = document.getElementById("toggleEraser");
var isErasing = false;

var drawingTest = new fabric.PencilBrush(canvas);
var eraserTest = new fabric.EraserBrush(canvas);

toggleEraserButton.addEventListener("click", function() {
    // if we are erasing (means were in draw mode) and we press the button, return to just drawing
    if (isErasing && canvas.isDrawingMode) {
        canvas.freeDrawingBrush = drawingTest;
        canvas.freeDrawingBrush.width = drawingLineWidthSlider.value-1;
        isErasing = false;
    }
    else {
        canvas.freeDrawingBrush = eraserTest;
        canvas.freeDrawingBrush.width = drawingLineWidthSlider.value-1;
        isErasing = true;
        isDrawingMode = true;
    }
});

/* Eraser */