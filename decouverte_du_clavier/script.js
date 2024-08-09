const textarea = document.getElementById("test-target");

textarea.addEventListener("keydown", (e) => {
  if (!e.repeat) {
	//console.log(`Key "${e.key} / ${e.keyCode} / ${e.code}" pressed`); //DEBUG
	if(e.key=="Escape") { document.getElementById("touche_esc").classList.remove("hidden"); document.getElementById("touche_esc").classList.add("show"); }
	if(e.key=="F1") { document.getElementById("touche_f1").classList.remove("hidden"); document.getElementById("touche_f1").classList.add("show"); }
	if(e.key=="F2") { document.getElementById("touche_f2").classList.remove("hidden"); document.getElementById("touche_f2").classList.add("show"); }
	if(e.key=="F3") { document.getElementById("touche_f3").classList.remove("hidden"); document.getElementById("touche_f3").classList.add("show"); }
	if(e.key=="F4") { document.getElementById("touche_f4").classList.remove("hidden"); document.getElementById("touche_f4").classList.add("show"); }
	if(e.key=="F5") { document.getElementById("touche_f5").classList.remove("hidden"); document.getElementById("touche_f5").classList.add("show"); }
	if(e.key=="F6") { document.getElementById("touche_f6").classList.remove("hidden"); document.getElementById("touche_f6").classList.add("show"); }
	if(e.key=="F7") { document.getElementById("touche_f7").classList.remove("hidden"); document.getElementById("touche_f7").classList.add("show"); }
	if(e.key=="F8") { document.getElementById("touche_f8").classList.remove("hidden"); document.getElementById("touche_f8").classList.add("show"); }
	if(e.key=="F9") { document.getElementById("touche_f9").classList.remove("hidden"); document.getElementById("touche_f9").classList.add("show"); }
	if(e.key=="F10") { document.getElementById("touche_f10").classList.remove("hidden"); document.getElementById("touche_f10").classList.add("show"); }
	if(e.key=="F11") { document.getElementById("touche_f11").classList.remove("hidden"); document.getElementById("touche_f11").classList.add("show"); }
	if(e.key=="F12") { document.getElementById("touche_f12").classList.remove("hidden"); document.getElementById("touche_f12").classList.add("show"); }
	
    if(e.key=="²") { document.getElementById("touche_exposant_2").classList.remove("hidden"); document.getElementById("touche_exposant_2").classList.add("show"); }
    if((e.key=="&") || (e.keyCode==49)) { document.getElementById("touche_1").classList.remove("hidden"); document.getElementById("touche_1").classList.add("show"); }
    if((e.key=="é") || (e.keyCode==50) || (e.key=="~")){ document.getElementById("touche_2").classList.remove("hidden"); document.getElementById("touche_2").classList.add("show"); }
    if((e.keyCode==51) || (e.key=="#")){ document.getElementById("touche_3").classList.remove("hidden"); document.getElementById("touche_3").classList.add("show"); }
    if((e.key=="'") || (e.keyCode==52) || (e.key=="{")){ document.getElementById("touche_4").classList.remove("hidden"); document.getElementById("touche_4").classList.add("show"); }
    if((e.key=="(") || (e.keyCode==53) || (e.key=="[")){ document.getElementById("touche_5").classList.remove("hidden"); document.getElementById("touche_5").classList.add("show"); }
    if((e.keyCode==54) || (e.key=="|")){ document.getElementById("touche_6").classList.remove("hidden"); document.getElementById("touche_6").classList.add("show"); }
    if((e.key=="è") || (e.keyCode==55) || (e.key=="`")){ document.getElementById("touche_7").classList.remove("hidden"); document.getElementById("touche_7").classList.add("show"); }
    if((e.key=="_") || (e.keyCode==56)){ document.getElementById("touche_8").classList.remove("hidden"); document.getElementById("touche_8").classList.add("show"); }
    if((e.key=="ç") || (e.keyCode==57)){ document.getElementById("touche_9").classList.remove("hidden"); document.getElementById("touche_9").classList.add("show"); }
    if((e.key=="à") || (e.keyCode==48) || (e.key=="@")) { document.getElementById("touche_0").classList.remove("hidden"); document.getElementById("touche_0").classList.add("show"); }
    if((e.key==")") || (e.keyCode==169) || (e.key=="]")) { document.getElementById("touche_degre").classList.remove("hidden"); document.getElementById("touche_degre").classList.add("show"); }
    if((e.key=="=") || (e.keyCode==61) || (e.key=="}")) { document.getElementById("touche_plus").classList.remove("hidden"); document.getElementById("touche_plus").classList.add("show"); }
    if((e.key=="Backspace") || (e.keyCode==8)) { document.getElementById("touche_suppr_g").classList.remove("hidden"); document.getElementById("touche_suppr_g").classList.add("show"); }
    if((e.key=="PrintScreen") || (e.keyCode==42)) { document.getElementById("touche_imp_ecran").classList.remove("hidden"); document.getElementById("touche_imp_ecran").classList.add("show"); }
    if((e.key=="ScrollLock") || (e.keyCode==145)) { document.getElementById("touche_arret_defil").classList.remove("hidden"); document.getElementById("touche_arret_defil").classList.add("show"); }
    if((e.key=="Pause") || (e.keyCode==19)) { document.getElementById("touche_pause_attn").classList.remove("hidden"); document.getElementById("touche_pause_attn").classList.add("show"); }
    if((e.key=="NumLock") || (e.keyCode==144)) { document.getElementById("touche_verr_num").classList.remove("hidden"); document.getElementById("touche_verr_num").classList.add("show"); }
    if(e.code=="NumpadDivide") { document.getElementById("touche_num_division").classList.remove("hidden"); document.getElementById("touche_num_division").classList.add("show"); }
    if(e.code=="NumpadMultiply") { document.getElementById("touche_num_multiplication").classList.remove("hidden"); document.getElementById("touche_num_multiplication").classList.add("show"); }
    if(e.code=="NumpadSubtract") { document.getElementById("touche_num_soustraction").classList.remove("hidden"); document.getElementById("touche_num_soustraction").classList.add("show"); }

    if((e.key=="Tab") || (e.keyCode==9)) { document.getElementById("touche_tab").classList.remove("hidden"); document.getElementById("touche_tab").classList.add("show"); }
    if((e.keyCode==65)) { document.getElementById("touche_a").classList.remove("hidden"); document.getElementById("touche_a").classList.add("show"); }
    if((e.keyCode==90)) { document.getElementById("touche_z").classList.remove("hidden"); document.getElementById("touche_z").classList.add("show"); }
    if((e.keyCode==69)) { document.getElementById("touche_e").classList.remove("hidden"); document.getElementById("touche_e").classList.add("show"); }
    if((e.keyCode==82)) { document.getElementById("touche_r").classList.remove("hidden"); document.getElementById("touche_r").classList.add("show"); }
    if((e.keyCode==84)) { document.getElementById("touche_t").classList.remove("hidden"); document.getElementById("touche_t").classList.add("show"); }
    if((e.keyCode==89)) { document.getElementById("touche_y").classList.remove("hidden"); document.getElementById("touche_y").classList.add("show"); }
    if((e.keyCode==85)) { document.getElementById("touche_u").classList.remove("hidden"); document.getElementById("touche_u").classList.add("show"); }
    if((e.keyCode==73)) { document.getElementById("touche_i").classList.remove("hidden"); document.getElementById("touche_i").classList.add("show"); }
    if((e.keyCode==79)) { document.getElementById("touche_o").classList.remove("hidden"); document.getElementById("touche_o").classList.add("show"); }
    if((e.keyCode==80)) { document.getElementById("touche_p").classList.remove("hidden"); document.getElementById("touche_p").classList.add("show"); }
    if((e.code=="BracketLeft")) { document.getElementById("touche_accents").classList.remove("hidden"); document.getElementById("touche_accents").classList.add("show"); }
    if((e.code=="BracketRight")) { document.getElementById("touche_dollar").classList.remove("hidden"); document.getElementById("touche_dollar").classList.add("show"); }
    if((e.code=="Enter")) { document.getElementById("touche_entree").classList.remove("hidden"); document.getElementById("touche_entree").classList.add("show"); }
    if((e.code=="Insert")) { document.getElementById("touche_insertion").classList.remove("hidden"); document.getElementById("touche_insertion").classList.add("show"); }
    if((e.code=="Home")) { document.getElementById("touche_fleche").classList.remove("hidden"); document.getElementById("touche_fleche").classList.add("show"); }
    if((e.code=="PageUp")) { document.getElementById("touche_fleche_haut").classList.remove("hidden"); document.getElementById("touche_fleche_haut").classList.add("show"); }
    if((e.code=="Numpad7")) { document.getElementById("touche_num_7").classList.remove("hidden"); document.getElementById("touche_num_7").classList.add("show"); }
    if((e.code=="Numpad8")) { document.getElementById("touche_num_8").classList.remove("hidden"); document.getElementById("touche_num_8").classList.add("show"); }
    if((e.code=="Numpad9")) { document.getElementById("touche_num_9").classList.remove("hidden"); document.getElementById("touche_num_9").classList.add("show"); }
    if((e.code=="NumpadAdd")) { document.getElementById("touche_num_addition").classList.remove("hidden"); document.getElementById("touche_num_addition").classList.add("show"); }

    if((e.code=="CapsLock")) { document.getElementById("touche_majuscule").classList.remove("hidden"); document.getElementById("touche_majuscule").classList.add("show"); }
    if((e.keyCode==81)) { document.getElementById("touche_q").classList.remove("hidden"); document.getElementById("touche_q").classList.add("show"); }
    if((e.keyCode==83)) { document.getElementById("touche_s").classList.remove("hidden"); document.getElementById("touche_s").classList.add("show"); }
    if((e.keyCode==68)) { document.getElementById("touche_d").classList.remove("hidden"); document.getElementById("touche_d").classList.add("show"); }
    if((e.keyCode==70)) { document.getElementById("touche_f").classList.remove("hidden"); document.getElementById("touche_f").classList.add("show"); }
    if((e.keyCode==71)) { document.getElementById("touche_g").classList.remove("hidden"); document.getElementById("touche_g").classList.add("show"); }
    if((e.keyCode==72)) { document.getElementById("touche_h").classList.remove("hidden"); document.getElementById("touche_h").classList.add("show"); }
    if((e.keyCode==74)) { document.getElementById("touche_j").classList.remove("hidden"); document.getElementById("touche_j").classList.add("show"); }
    if((e.keyCode==75)) { document.getElementById("touche_k").classList.remove("hidden"); document.getElementById("touche_k").classList.add("show"); }
    if((e.keyCode==76)) { document.getElementById("touche_l").classList.remove("hidden"); document.getElementById("touche_l").classList.add("show"); }
    if((e.keyCode==77)) { document.getElementById("touche_m").classList.remove("hidden"); document.getElementById("touche_m").classList.add("show"); }
    if((e.code=="Quote")) { document.getElementById("touche_pourcentage").classList.remove("hidden"); document.getElementById("touche_pourcentage").classList.add("show"); }
    if((e.code=="Backslash")) { document.getElementById("touche_micro_u").classList.remove("hidden"); document.getElementById("touche_micro_u").classList.add("show"); }
    if((e.code=="Delete")) { document.getElementById("touche_suppr_d").classList.remove("hidden"); document.getElementById("touche_suppr_d").classList.add("show"); }
    if((e.code=="End")) { document.getElementById("touche_fin").classList.remove("hidden"); document.getElementById("touche_fin").classList.add("show"); }
    if((e.code=="PageDown")) { document.getElementById("touche_fleche_bas").classList.remove("hidden"); document.getElementById("touche_fleche_bas").classList.add("show"); }
	if((e.code=="Numpad4")) { document.getElementById("touche_num_4").classList.remove("hidden"); document.getElementById("touche_num_4").classList.add("show"); }
    if((e.code=="Numpad5")) { document.getElementById("touche_num_5").classList.remove("hidden"); document.getElementById("touche_num_5").classList.add("show"); }
    if((e.code=="Numpad6")) { document.getElementById("touche_num_6").classList.remove("hidden"); document.getElementById("touche_num_6").classList.add("show"); }

    if(e.code=="ShiftLeft") { document.getElementById("touche_shift_g").classList.remove("hidden"); document.getElementById("touche_shift_g").classList.add("show"); }
    if((e.code=="IntlBackslash")) { document.getElementById("touche_sup_inf").classList.remove("hidden"); document.getElementById("touche_sup_inf").classList.add("show"); }
    if((e.keyCode==87)) { document.getElementById("touche_w").classList.remove("hidden"); document.getElementById("touche_w").classList.add("show"); }
    if((e.keyCode==88)) { document.getElementById("touche_x").classList.remove("hidden"); document.getElementById("touche_x").classList.add("show"); }
    if((e.keyCode==67)) { document.getElementById("touche_c").classList.remove("hidden"); document.getElementById("touche_c").classList.add("show"); }
    if((e.keyCode==86)) { document.getElementById("touche_v").classList.remove("hidden"); document.getElementById("touche_v").classList.add("show"); }
    if((e.keyCode==66)) { document.getElementById("touche_b").classList.remove("hidden"); document.getElementById("touche_b").classList.add("show"); }
    if((e.keyCode==78)) { document.getElementById("touche_n").classList.remove("hidden"); document.getElementById("touche_n").classList.add("show"); }    
    if(e.code=="KeyM") { document.getElementById("touche_virgule").classList.remove("hidden"); document.getElementById("touche_virgule").classList.add("show"); }
    if(e.code=="Comma") { document.getElementById("touche_point_virgule").classList.remove("hidden"); document.getElementById("touche_point_virgule").classList.add("show"); }
    if(e.code=="Period") { document.getElementById("touche_deux_points").classList.remove("hidden"); document.getElementById("touche_deux_points").classList.add("show"); }
    if(e.code=="Slash") { document.getElementById("touche_exclamation").classList.remove("hidden"); document.getElementById("touche_exclamation").classList.add("show"); }
    if(e.code=="ShiftRight") { document.getElementById("touche_shift_d").classList.remove("hidden"); document.getElementById("touche_shift_d").classList.add("show"); }
    if(e.code=="ArrowUp") { document.getElementById("touche_haut").classList.remove("hidden"); document.getElementById("touche_haut").classList.add("show"); }
	if((e.code=="Numpad1")) { document.getElementById("touche_num_1").classList.remove("hidden"); document.getElementById("touche_num_1").classList.add("show"); }
    if((e.code=="Numpad2")) { document.getElementById("touche_num_2").classList.remove("hidden"); document.getElementById("touche_num_2").classList.add("show"); }
    if((e.code=="Numpad3")) { document.getElementById("touche_num_3").classList.remove("hidden"); document.getElementById("touche_num_3").classList.add("show"); }
    if((e.code=="NumpadEnter")) { document.getElementById("touche_num_entree").classList.remove("hidden"); document.getElementById("touche_num_entree").classList.add("show"); }

    if(e.code=="ControlLeft") { document.getElementById("touche_ctrl_g").classList.remove("hidden"); document.getElementById("touche_ctrl_g").classList.add("show"); }
    if(e.code=="AltLeft") { document.getElementById("touche_alt").classList.remove("hidden"); document.getElementById("touche_alt").classList.add("show"); }
    if((e.key=="Meta") || (e.code=="MetaLeft")) { document.getElementById("touche_windows").classList.remove("hidden"); document.getElementById("touche_windows").classList.add("show"); }
    if(e.code=="Space") { document.getElementById("touche_espace").classList.remove("hidden"); document.getElementById("touche_espace").classList.add("show"); }
    if(e.code=="AltRight") { document.getElementById("touche_alt_gr").classList.remove("hidden"); document.getElementById("touche_alt_gr").classList.add("show"); }
    if(e.code=="ControlRight") { document.getElementById("touche_ctrl_d").classList.remove("hidden"); document.getElementById("touche_ctrl_d").classList.add("show"); }
    if(e.code=="ArrowLeft") { document.getElementById("touche_gauche").classList.remove("hidden"); document.getElementById("touche_gauche").classList.add("show"); }
    if(e.code=="ArrowDown") { document.getElementById("touche_bas").classList.remove("hidden"); document.getElementById("touche_bas").classList.add("show"); }
    if(e.code=="ArrowRight") { document.getElementById("touche_droite").classList.remove("hidden"); document.getElementById("touche_droite").classList.add("show"); }
    if((e.code=="Numpad0")) { document.getElementById("touche_num_0").classList.remove("hidden"); document.getElementById("touche_num_0").classList.add("show"); }
    if((e.code=="NumpadDecimal")) { document.getElementById("touche_num_point").classList.remove("hidden"); document.getElementById("touche_num_point").classList.add("show"); }   
  }

  if(e.key=="F3") e.preventDefault();  
  if(e.key=="F5") e.preventDefault();
  if(e.key=="F6") e.preventDefault();
  if(e.key=="F7") e.preventDefault();
  if(e.key=="F10") e.preventDefault();
  if(e.key=="F11") e.preventDefault();
  if(e.key=="F12") e.preventDefault();
  if(e.key=="AltLeft") e.preventDefault();  
});

textarea.addEventListener("keyup", (e) => {
	//console.log(`Key "${e.key} / ${e.keyCode} / ${e.code}" released`); //DEBUG
	if(e.key=="Escape") { document.getElementById("touche_esc").classList.remove("show"); document.getElementById("touche_esc").classList.add("hidden"); }
	if(e.key=="F1") { document.getElementById("touche_f1").classList.remove("show"); document.getElementById("touche_f1").classList.add("hidden"); }
	if(e.key=="F2") { document.getElementById("touche_f2").classList.remove("show"); document.getElementById("touche_f2").classList.add("hidden"); }
	if(e.key=="F3") { document.getElementById("touche_f3").classList.remove("show"); document.getElementById("touche_f3").classList.add("hidden"); }
	if(e.key=="F4") { document.getElementById("touche_f4").classList.remove("show"); document.getElementById("touche_f4").classList.add("hidden"); }
	if(e.key=="F5") { document.getElementById("touche_f5").classList.remove("show"); document.getElementById("touche_f5").classList.add("hidden"); }
	if(e.key=="F6") { document.getElementById("touche_f6").classList.remove("show"); document.getElementById("touche_f6").classList.add("hidden"); }
	if(e.key=="F7") { document.getElementById("touche_f7").classList.remove("show"); document.getElementById("touche_f7").classList.add("hidden"); }
	if(e.key=="F8") { document.getElementById("touche_f8").classList.remove("show"); document.getElementById("touche_f8").classList.add("hidden"); }
	if(e.key=="F9") { document.getElementById("touche_f9").classList.remove("show"); document.getElementById("touche_f9").classList.add("hidden"); }
	if(e.key=="F10") { document.getElementById("touche_f10").classList.remove("show"); document.getElementById("touche_f10").classList.add("hidden"); }
	if(e.key=="F11") { document.getElementById("touche_f11").classList.remove("show"); document.getElementById("touche_f11").classList.add("hidden"); }
	if(e.key=="F12") { document.getElementById("touche_f12").classList.remove("show"); document.getElementById("touche_f12").classList.add("hidden"); }

	if(e.key=="²") { document.getElementById("touche_exposant_2").classList.remove("show"); document.getElementById("touche_exposant_2").classList.add("hidden"); }
    if((e.keyCode==49) || (e.key=="&")) { document.getElementById("touche_1").classList.remove("show"); document.getElementById("touche_1").classList.add("hidden"); }
    if((e.key=="é") || (e.keyCode==50) || (e.key=="~")){ document.getElementById("touche_2").classList.remove("show"); document.getElementById("touche_2").classList.add("hidden"); }
    if((e.keyCode==51) || (e.key=="#")){ document.getElementById("touche_3").classList.remove("show"); document.getElementById("touche_3").classList.add("hidden"); }
    if((e.key=="'") || (e.keyCode==52) || (e.key=="{")){ document.getElementById("touche_4").classList.remove("show"); document.getElementById("touche_4").classList.add("hidden"); }
    if((e.key=="(") || (e.keyCode==53) || (e.key=="[")){ document.getElementById("touche_5").classList.remove("show"); document.getElementById("touche_5").classList.add("hidden"); }
    if((e.keyCode==54) || (e.key=="|")){ document.getElementById("touche_6").classList.remove("show"); document.getElementById("touche_6").classList.add("hidden"); }
    if((e.key=="è") || (e.keyCode==55) || (e.key=="`")){ document.getElementById("touche_7").classList.remove("show"); document.getElementById("touche_7").classList.add("hidden"); }
    if((e.key=="_") || (e.keyCode==56)){ document.getElementById("touche_8").classList.remove("show"); document.getElementById("touche_8").classList.add("hidden"); }
    if((e.key=="ç") || (e.keyCode==57)){ document.getElementById("touche_9").classList.remove("show"); document.getElementById("touche_9").classList.add("hidden"); }
    if((e.key=="à") || (e.keyCode==48) || (e.key=="@")) { document.getElementById("touche_0").classList.remove("show"); document.getElementById("touche_0").classList.add("hidden"); }
    if((e.key==")") || (e.keyCode==169) || (e.key=="]")) { document.getElementById("touche_degre").classList.remove("show"); document.getElementById("touche_degre").classList.add("hidden"); }
    if((e.key=="=") || (e.keyCode==61) || (e.key=="}")) { document.getElementById("touche_plus").classList.remove("show"); document.getElementById("touche_plus").classList.add("hidden"); }
    if((e.key=="Backspace") || (e.keyCode==8)) { document.getElementById("touche_suppr_g").classList.remove("show"); document.getElementById("touche_suppr_g").classList.add("hidden"); }
    if((e.key=="PrintScreen") || (e.keyCode==42)) { document.getElementById("touche_imp_ecran").classList.remove("show"); document.getElementById("touche_imp_ecran").classList.add("hidden"); }
    if((e.key=="ScrollLock") || (e.keyCode==145)) { document.getElementById("touche_arret_defil").classList.remove("show"); document.getElementById("touche_arret_defil").classList.add("hidden"); }
    if((e.key=="Pause") || (e.keyCode==19)) { document.getElementById("touche_pause_attn").classList.remove("show"); document.getElementById("touche_pause_attn").classList.add("hidden"); }
    if((e.key=="NumLock") || (e.keyCode==144)) { document.getElementById("touche_verr_num").classList.remove("show"); document.getElementById("touche_verr_num").classList.add("hidden"); }
    if(e.code=="NumpadDivide") { document.getElementById("touche_num_division").classList.remove("show"); document.getElementById("touche_num_division").classList.add("hidden"); }
    if(e.code=="NumpadMultiply") { document.getElementById("touche_num_multiplication").classList.remove("show"); document.getElementById("touche_num_multiplication").classList.add("hidden"); }
    if(e.code=="NumpadSubtract") { document.getElementById("touche_num_soustraction").classList.remove("show"); document.getElementById("touche_num_soustraction").classList.add("hidden"); }

    if((e.key=="Tab") || (e.keyCode==9)) { document.getElementById("touche_tab").classList.remove("show"); document.getElementById("touche_tab").classList.add("hidden"); }
    if((e.keyCode==65)) { document.getElementById("touche_a").classList.remove("show"); document.getElementById("touche_a").classList.add("hidden"); }
    if((e.keyCode==90)) { document.getElementById("touche_z").classList.remove("show"); document.getElementById("touche_z").classList.add("hidden"); }
    if((e.keyCode==69)) { document.getElementById("touche_e").classList.remove("show"); document.getElementById("touche_e").classList.add("hidden"); }
    if((e.keyCode==82)) { document.getElementById("touche_r").classList.remove("show"); document.getElementById("touche_r").classList.add("hidden"); }
    if((e.keyCode==84)) { document.getElementById("touche_t").classList.remove("show"); document.getElementById("touche_t").classList.add("hidden"); }
    if((e.keyCode==89)) { document.getElementById("touche_y").classList.remove("show"); document.getElementById("touche_y").classList.add("hidden"); }
    if((e.keyCode==85)) { document.getElementById("touche_u").classList.remove("show"); document.getElementById("touche_u").classList.add("hidden"); }
    if((e.keyCode==73)) { document.getElementById("touche_i").classList.remove("show"); document.getElementById("touche_i").classList.add("hidden"); }
    if((e.keyCode==79)) { document.getElementById("touche_o").classList.remove("show"); document.getElementById("touche_o").classList.add("hidden"); }
    if((e.keyCode==80)) { document.getElementById("touche_p").classList.remove("show"); document.getElementById("touche_p").classList.add("hidden"); }
    if((e.code=="BracketLeft")) { document.getElementById("touche_accents").classList.remove("show"); document.getElementById("touche_accents").classList.add("hidden"); }
    if((e.code=="BracketRight")) { document.getElementById("touche_dollar").classList.remove("show"); document.getElementById("touche_dollar").classList.add("hidden"); }
    if((e.code=="Enter")) { document.getElementById("touche_entree").classList.remove("show"); document.getElementById("touche_entree").classList.add("hidden"); }
    if((e.code=="Insert")) { document.getElementById("touche_insertion").classList.remove("show"); document.getElementById("touche_insertion").classList.add("hidden"); }
    if((e.code=="Home")) { document.getElementById("touche_fleche").classList.remove("show"); document.getElementById("touche_fleche").classList.add("hidden"); }
    if((e.code=="PageUp")) { document.getElementById("touche_fleche_haut").classList.remove("show"); document.getElementById("touche_fleche_haut").classList.add("hidden"); }
    if((e.code=="Numpad7")) { document.getElementById("touche_num_7").classList.remove("show"); document.getElementById("touche_num_7").classList.add("hidden"); }
    if((e.code=="Numpad8")) { document.getElementById("touche_num_8").classList.remove("show"); document.getElementById("touche_num_8").classList.add("hidden"); }
    if((e.code=="Numpad9")) { document.getElementById("touche_num_9").classList.remove("show"); document.getElementById("touche_num_9").classList.add("hidden"); }
    if((e.code=="NumpadAdd")) { document.getElementById("touche_num_addition").classList.remove("show"); document.getElementById("touche_num_addition").classList.add("hidden"); }

    if((e.code=="CapsLock")) { document.getElementById("touche_majuscule").classList.remove("show"); document.getElementById("touche_majuscule").classList.add("hidden"); }
    if((e.keyCode==81)) { document.getElementById("touche_q").classList.remove("show"); document.getElementById("touche_q").classList.add("hidden"); }
    if((e.keyCode==83)) { document.getElementById("touche_s").classList.remove("show"); document.getElementById("touche_s").classList.add("hidden"); }
    if((e.keyCode==68)) { document.getElementById("touche_d").classList.remove("show"); document.getElementById("touche_d").classList.add("hidden"); }
    if((e.keyCode==70)) { document.getElementById("touche_f").classList.remove("show"); document.getElementById("touche_f").classList.add("hidden"); }
    if((e.keyCode==71)) { document.getElementById("touche_g").classList.remove("show"); document.getElementById("touche_g").classList.add("hidden"); }
    if((e.keyCode==72)) { document.getElementById("touche_h").classList.remove("show"); document.getElementById("touche_h").classList.add("hidden"); }
    if((e.keyCode==74)) { document.getElementById("touche_j").classList.remove("show"); document.getElementById("touche_j").classList.add("hidden"); }
    if((e.keyCode==75)) { document.getElementById("touche_k").classList.remove("show"); document.getElementById("touche_k").classList.add("hidden"); }
    if((e.keyCode==76)) { document.getElementById("touche_l").classList.remove("show"); document.getElementById("touche_l").classList.add("hidden"); }
    if((e.keyCode==77)) { document.getElementById("touche_m").classList.remove("show"); document.getElementById("touche_m").classList.add("hidden"); }
    if((e.code=="Quote")) { document.getElementById("touche_pourcentage").classList.remove("show"); document.getElementById("touche_pourcentage").classList.add("hidden"); }
    if((e.code=="Backslash")) { document.getElementById("touche_micro_u").classList.remove("show"); document.getElementById("touche_micro_u").classList.add("hidden"); }
    if((e.code=="Delete")) { document.getElementById("touche_suppr_d").classList.remove("show"); document.getElementById("touche_suppr_d").classList.add("hidden"); }
    if((e.code=="End")) { document.getElementById("touche_fin").classList.remove("show"); document.getElementById("touche_fin").classList.add("hidden"); }
    if((e.code=="PageDown")) { document.getElementById("touche_fleche_bas").classList.remove("show"); document.getElementById("touche_fleche_bas").classList.add("hidden"); }
	if((e.code=="Numpad4")) { document.getElementById("touche_num_4").classList.remove("show"); document.getElementById("touche_num_4").classList.add("hidden"); }
    if((e.code=="Numpad5")) { document.getElementById("touche_num_5").classList.remove("show"); document.getElementById("touche_num_5").classList.add("hidden"); }
    if((e.code=="Numpad6")) { document.getElementById("touche_num_6").classList.remove("show"); document.getElementById("touche_num_6").classList.add("hidden"); }
     
    if(e.code=="ShiftLeft") { document.getElementById("touche_shift_g").classList.remove("show"); document.getElementById("touche_shift_g").classList.add("hidden"); }
    if((e.code=="IntlBackslash")) { document.getElementById("touche_sup_inf").classList.remove("show"); document.getElementById("touche_sup_inf").classList.add("hidden"); }
    if((e.keyCode==87)) { document.getElementById("touche_w").classList.remove("show"); document.getElementById("touche_w").classList.add("hidden"); }
    if((e.keyCode==88)) { document.getElementById("touche_x").classList.remove("show"); document.getElementById("touche_x").classList.add("hidden"); }
    if((e.keyCode==67)) { document.getElementById("touche_c").classList.remove("show"); document.getElementById("touche_c").classList.add("hidden"); }
    if((e.keyCode==86)) { document.getElementById("touche_v").classList.remove("show"); document.getElementById("touche_v").classList.add("hidden"); }
    if((e.keyCode==66)) { document.getElementById("touche_b").classList.remove("show"); document.getElementById("touche_b").classList.add("hidden"); }
    if((e.keyCode==78)) { document.getElementById("touche_n").classList.remove("show"); document.getElementById("touche_n").classList.add("hidden"); }    
    if(e.code=="KeyM") { document.getElementById("touche_virgule").classList.remove("show"); document.getElementById("touche_virgule").classList.add("hidden"); }
    if(e.code=="Comma") { document.getElementById("touche_point_virgule").classList.remove("show"); document.getElementById("touche_point_virgule").classList.add("hidden"); }
    if(e.code=="Period") { document.getElementById("touche_deux_points").classList.remove("show"); document.getElementById("touche_deux_points").classList.add("hidden"); }
    if(e.code=="Slash") { document.getElementById("touche_exclamation").classList.remove("show"); document.getElementById("touche_exclamation").classList.add("hidden"); }
    if(e.code=="ShiftRight") { document.getElementById("touche_shift_d").classList.remove("show"); document.getElementById("touche_shift_d").classList.add("hidden"); }
    if(e.code=="ArrowUp") { document.getElementById("touche_haut").classList.remove("show"); document.getElementById("touche_haut").classList.add("hidden"); }
	if((e.code=="Numpad1")) { document.getElementById("touche_num_1").classList.remove("show"); document.getElementById("touche_num_1").classList.add("hidden"); }
    if((e.code=="Numpad2")) { document.getElementById("touche_num_2").classList.remove("show"); document.getElementById("touche_num_2").classList.add("hidden"); }
    if((e.code=="Numpad3")) { document.getElementById("touche_num_3").classList.remove("show"); document.getElementById("touche_num_3").classList.add("hidden"); }
    if((e.code=="NumpadEnter")) { document.getElementById("touche_num_entree").classList.remove("show"); document.getElementById("touche_num_entree").classList.add("hidden"); }

    if(e.code=="ControlLeft") { document.getElementById("touche_ctrl_g").classList.remove("show"); document.getElementById("touche_ctrl_g").classList.add("hidden"); }
    if(e.code=="AltLeft") { document.getElementById("touche_alt").classList.remove("show"); document.getElementById("touche_alt").classList.add("hidden"); }
    if((e.key=="Meta") || (e.code=="MetaLeft")) { document.getElementById("touche_windows").classList.remove("show"); document.getElementById("touche_windows").classList.add("hidden"); }
    if(e.code=="Space") { document.getElementById("touche_espace").classList.remove("show"); document.getElementById("touche_espace").classList.add("hidden"); }
    if(e.code=="AltRight") { document.getElementById("touche_alt_gr").classList.remove("show"); document.getElementById("touche_alt_gr").classList.add("hidden"); }
    if(e.code=="ControlRight") { document.getElementById("touche_ctrl_d").classList.remove("show"); document.getElementById("touche_ctrl_d").classList.add("hidden"); }
    if(e.code=="ArrowLeft") { document.getElementById("touche_gauche").classList.remove("show"); document.getElementById("touche_gauche").classList.add("hidden"); }
    if(e.code=="ArrowDown") { document.getElementById("touche_bas").classList.remove("show"); document.getElementById("touche_bas").classList.add("hidden"); }
    if(e.code=="ArrowRight") { document.getElementById("touche_droite").classList.remove("show"); document.getElementById("touche_droite").classList.add("hidden"); }
    if((e.code=="Numpad0")) { document.getElementById("touche_num_0").classList.remove("show"); document.getElementById("touche_num_0").classList.add("hidden"); }
    if((e.code=="NumpadDecimal")) { document.getElementById("touche_num_point").classList.remove("show"); document.getElementById("touche_num_point").classList.add("hidden"); }
});
