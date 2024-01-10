gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGameOverTextObjects1= [];
gdjs.Game_32OverCode.GDGameOverTextObjects2= [];
gdjs.Game_32OverCode.GDTestObjects1= [];
gdjs.Game_32OverCode.GDTestObjects2= [];
gdjs.Game_32OverCode.GDScoreTextObjects1= [];
gdjs.Game_32OverCode.GDScoreTextObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Game_32OverCode.GDScoreTextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\gameover.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") > 1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0.4;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "CRT", "noise", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(0.01);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGameOverTextObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverTextObjects2.length = 0;
gdjs.Game_32OverCode.GDTestObjects1.length = 0;
gdjs.Game_32OverCode.GDTestObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreTextObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreTextObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
