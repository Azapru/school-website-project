gdjs.MainCode = {};
gdjs.MainCode.GDBackgroundObjects1= [];
gdjs.MainCode.GDBackgroundObjects2= [];
gdjs.MainCode.GDMizukiObjects1= [];
gdjs.MainCode.GDMizukiObjects2= [];
gdjs.MainCode.GDThrowAreaObjects1= [];
gdjs.MainCode.GDThrowAreaObjects2= [];
gdjs.MainCode.GDBallObjects1= [];
gdjs.MainCode.GDBallObjects2= [];
gdjs.MainCode.GDGroundObjects1= [];
gdjs.MainCode.GDGroundObjects2= [];
gdjs.MainCode.GDBasketImgObjects1= [];
gdjs.MainCode.GDBasketImgObjects2= [];
gdjs.MainCode.GDBasketHitboxObjects1= [];
gdjs.MainCode.GDBasketHitboxObjects2= [];
gdjs.MainCode.GDGoalObjects1= [];
gdjs.MainCode.GDGoalObjects2= [];
gdjs.MainCode.GDScoreTextObjects1= [];
gdjs.MainCode.GDScoreTextObjects2= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects1= [];
gdjs.MainCode.GDOnScreenControlsButtonObjects2= [];
gdjs.MainCode.GDCreditObjects1= [];
gdjs.MainCode.GDCreditObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDThrowAreaObjects1Objects = Hashtable.newFrom({"ThrowArea": gdjs.MainCode.GDThrowAreaObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDThrowAreaObjects1Objects = Hashtable.newFrom({"ThrowArea": gdjs.MainCode.GDThrowAreaObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDOnScreenControlsButtonObjects1Objects = Hashtable.newFrom({"OnScreenControlsButton": gdjs.MainCode.GDOnScreenControlsButtonObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGoalObjects1Objects = Hashtable.newFrom({"Goal": gdjs.MainCode.GDGoalObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.MainCode.GDBallObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BasketHitbox"), gdjs.MainCode.GDBasketHitboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.MainCode.GDGoalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.MainCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThrowArea"), gdjs.MainCode.GDThrowAreaObjects1);
{for(var i = 0, len = gdjs.MainCode.GDThrowAreaObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDThrowAreaObjects1[i].getBehavior("Opacity").setOpacity(50);
}
}{for(var i = 0, len = gdjs.MainCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDBasketHitboxObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBasketHitboxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDGoalObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGoalObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ThrowArea"), gdjs.MainCode.GDThrowAreaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDThrowAreaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("DraggablePhysics").SetEnableAutomaticDragging(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ThrowArea"), gdjs.MainCode.GDThrowAreaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDThrowAreaObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("DraggablePhysics").SetEnableAutomaticDragging(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("DraggablePhysics").ReleaseDrag((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9505340);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mizuki"), gdjs.MainCode.GDMizukiObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].setPosition((( gdjs.MainCode.GDMizukiObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDMizukiObjects1[0].getPointX("")),(( gdjs.MainCode.GDMizukiObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDMizukiObjects1[0].getPointY("")) - 200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.MainCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDOnScreenControlsButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mizuki"), gdjs.MainCode.GDMizukiObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].setPosition((( gdjs.MainCode.GDMizukiObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDMizukiObjects1[0].getPointX("")),(( gdjs.MainCode.GDMizukiObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDMizukiObjects1[0].getPointY("")) - 200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.MainCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.MainCode.GDGoalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects, "Physics2", gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGoalObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Mizuki"), gdjs.MainCode.GDMizukiObjects1);
{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Physics2").setAngularVelocity(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].setPosition((( gdjs.MainCode.GDMizukiObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDMizukiObjects1[0].getPointX("")),(( gdjs.MainCode.GDMizukiObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDMizukiObjects1[0].getPointY("")) - 200);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.MainCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mizuki"), gdjs.MainCode.GDMizukiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMizukiObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMizukiObjects1[i].getVariableString(gdjs.MainCode.GDMizukiObjects1[i].getVariables().getFromIndex(0)) == "down" ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMizukiObjects1[k] = gdjs.MainCode.GDMizukiObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMizukiObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMizukiObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDMizukiObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMizukiObjects1[i].getBehavior("Scale").setScaleY(gdjs.MainCode.GDMizukiObjects1[i].getBehavior("Scale").getScaleY() - (0.0015));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mizuki"), gdjs.MainCode.GDMizukiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMizukiObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMizukiObjects1[i].getVariableString(gdjs.MainCode.GDMizukiObjects1[i].getVariables().getFromIndex(0)) == "up" ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMizukiObjects1[k] = gdjs.MainCode.GDMizukiObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMizukiObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMizukiObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDMizukiObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMizukiObjects1[i].getBehavior("Scale").setScaleY(gdjs.MainCode.GDMizukiObjects1[i].getBehavior("Scale").getScaleY() + (0.0015));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mizuki"), gdjs.MainCode.GDMizukiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMizukiObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMizukiObjects1[i].getBehavior("Scale").getScaleY() <= 0.97 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMizukiObjects1[k] = gdjs.MainCode.GDMizukiObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMizukiObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMizukiObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDMizukiObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMizukiObjects1[i].returnVariable(gdjs.MainCode.GDMizukiObjects1[i].getVariables().getFromIndex(0)).setString("up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mizuki"), gdjs.MainCode.GDMizukiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMizukiObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMizukiObjects1[i].getBehavior("Scale").getScaleY() >= 1.03 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMizukiObjects1[k] = gdjs.MainCode.GDMizukiObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMizukiObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMizukiObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDMizukiObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMizukiObjects1[i].returnVariable(gdjs.MainCode.GDMizukiObjects1[i].getVariables().getFromIndex(0)).setString("down");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9513276);
}
}
if (isConditionTrue_0) {
gdjs.MainCode.GDBallObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBallObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.MainCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBallObjects1[i].getBehavior("Resizable").setSize(89, 89);
}
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDMizukiObjects1.length = 0;
gdjs.MainCode.GDMizukiObjects2.length = 0;
gdjs.MainCode.GDThrowAreaObjects1.length = 0;
gdjs.MainCode.GDThrowAreaObjects2.length = 0;
gdjs.MainCode.GDBallObjects1.length = 0;
gdjs.MainCode.GDBallObjects2.length = 0;
gdjs.MainCode.GDGroundObjects1.length = 0;
gdjs.MainCode.GDGroundObjects2.length = 0;
gdjs.MainCode.GDBasketImgObjects1.length = 0;
gdjs.MainCode.GDBasketImgObjects2.length = 0;
gdjs.MainCode.GDBasketHitboxObjects1.length = 0;
gdjs.MainCode.GDBasketHitboxObjects2.length = 0;
gdjs.MainCode.GDGoalObjects1.length = 0;
gdjs.MainCode.GDGoalObjects2.length = 0;
gdjs.MainCode.GDScoreTextObjects1.length = 0;
gdjs.MainCode.GDScoreTextObjects2.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.MainCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.MainCode.GDCreditObjects1.length = 0;
gdjs.MainCode.GDCreditObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
