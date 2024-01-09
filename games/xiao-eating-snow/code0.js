gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects2= [];
gdjs.Untitled_32sceneCode.GDSnowObjects1= [];
gdjs.Untitled_32sceneCode.GDSnowObjects2= [];
gdjs.Untitled_32sceneCode.GDBGObjects1= [];
gdjs.Untitled_32sceneCode.GDBGObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreTextObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreTextObjects2= [];
gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDCreditsObjects1= [];
gdjs.Untitled_32sceneCode.GDCreditsObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerXiaoObjects1Objects = Hashtable.newFrom({"PlayerXiao": gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSnowObjects1Objects = Hashtable.newFrom({"Snow": gdjs.Untitled_32sceneCode.GDSnowObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Untitled_32sceneCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariableString(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].setX(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getX() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(1)))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariableString(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].setX(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getX() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(1)))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariableString(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)) == "up" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].setY(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(1)))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariableString(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)) == "down" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].setY(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(1)))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9592036);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)).setString("down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9569012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)).setString("down");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9727236);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)).setString("up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9516532);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)).setString("up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8141276);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9589132);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8436884);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8145468);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.Untitled_32sceneCode.GDSnowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerXiaoObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSnowObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDSnowObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getVariables().getFromIndex(1)).add(0.5);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSnowObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSnowObjects1[i].setPosition(gdjs.randomInRange(0, 1280 - 128),gdjs.randomInRange(0, 720 - 64));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getX() <= -(100) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getX() >= 1280 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getY() <= -(100) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerXiao"), gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i].getY() >= 720 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransparentDarkJoystick"), gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerXiaoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSnowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSnowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentDarkJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCreditsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCreditsObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
