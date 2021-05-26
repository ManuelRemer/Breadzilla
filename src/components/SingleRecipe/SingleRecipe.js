import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import ExpandButton from "../Buttons/NavButtons/ExpandButton";
import "./SingleRecipe.css";
import computeIngredients from "../../services/computeIngredients";
import { useParams } from "react-router-dom";
import { useState } from "react";
import NavButton from "../Buttons/NavButtons/NavButton";
import DeleteButton from "../Buttons/NavButtons/DeleteButton";
import DeleteRecipePopUp from "./DeleteRecipePopUp/DeleteRecipePopUP";

export default function SingleRecipe({ savedRecipes, onDelete }) {
  const [expandInfoSF, setExpandInfoSF] = useState(false);
  const [expandInfoKR, setExpandInfoKR] = useState(false);
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);
  const { name } = useParams();
  const { recipe } = savedRecipes.find((recipe) => recipe.recipe.name === name);
  const { ingredients } = recipe;
  const { totalRatioRyes, totalRatioSpelts } = computeIngredients(ingredients);

  const steps = [
    {
      content:
        "All ingredients are at room temperature. Measure everything exactly.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: true,
      speltOver30: true,
      ryeOver10: true,
      ryeOver10speltOver30: true,
    },

    {
      content: `Boil ${
        ((600 * (totalRatioSpelts.ratioValue / 100)) / 100) * 25
      } g of water and stir in ${
        ((600 * (totalRatioSpelts.ratioValue / 100)) / 100) * 5
      } g of the spelt flour and the Salt with a whisk. Allow the mixture to cool for at least one hour.`,
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: false,
      speltOver30: true,
      ryeOver10: false,
      ryeOver10speltOver30: true,
    },
    {
      content:
        "Disolve the yeast in 20 g of the water, the salt in the remaining water.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: true,
      speltOver30: false,
      ryeOver10: true,
      ryeOver10speltOver30: false,
    },
    {
      content: "Disolve the yeast in 20 g of the water.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: false,
      speltOver30: true,
      ryeOver10: false,
      ryeOver10speltOver30: true,
    },
    {
      content:
        "Pour the salt water into a large bowl. Add the flours. Add the yeast water last.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: true,
      speltOver30: false,
      ryeOver10: false,
      ryeOver10speltOver30: false,
    },
    {
      content:
        "Pour the salt water and vinegar into a large bowl. Add the flours. Add the yeast water last.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: false,
      speltOver30: false,
      ryeOver10: true,
      ryeOver10speltOver30: false,
    },
    {
      content:
        "Pour the water and lemon juice into a large bowl. Add flours, and roux. Add the yeast water last.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: false,
      speltOver30: true,
      ryeOver10: false,
      ryeOver10speltOver30: false,
    },
    {
      content:
        "Pour the water, lemon juice and vinegar into a large bowl. Add flours, and roux. Add the yeast water last.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: false,
      speltOver30: false,
      ryeOver10: false,
      ryeOver10speltOver30: true,
    },
    {
      content:
        "Mix everything by hand to a homogenous mass. This may take some time. The dough rests for 24 hours at room temperature.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: true,
      speltOver30: true,
      ryeOver10: true,
      ryeOver10speltOver30: true,
    },
    {
      content:
        "In the meantime, stretch and fold it every 8 hours. If you have time or just want to, do this more often. It'll strengthen the doughs structure. But give it time to relax, at least two ours between each stretching and folding.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> In the meantime,{" "}
              <ExpandButton
                label="stretch and fold"
                className="SingleRecipe_Text_InfoButton"
                onClick={() => setExpandInfoSF(!expandInfoSF)}
              />{" "}
              it every 8 hours. If you have time or just want to, do this more
              often. It'll strengthen the doughs structure. But give it time to
              relax, at least two ours between each stretching and folding
            </p>{" "}
            {expandInfoSF && (
              <p
                className={
                  expandInfoSF
                    ? "SingleRecipe_Text_Info"
                    : "SingleRecipe_Text_Info-collapsed"
                }
              >
                Flour your working surface and hands. Take the dough out of its
                bowl. It might be sticky and soft. If you have one, use a wet
                dough scraper for this. Grasp a part of the dough, similar to
                stretching and folding it. Stretch it, but gently and fold it
                just to the top center. Go ahead round the dough until you've
                stretched every part once. The goal is to tighten the doughs
                outer skin.
                <ExpandButton
                  label="X"
                  className="CloseButton"
                  onClick={() => setExpandInfoSF(!expandInfoSF)}
                />
              </p>
            )}
          </div>
        );
      },
      ordinary: true,
      speltOver30: true,
      ryeOver10: true,
      ryeOver10speltOver30: true,
      expand: true,
    },
    {
      content:
        "After 24 hours of resting the dough should have doubled in volume. Now it's ready to get kneaded round. Flour your working surface and hands. Take the dough out of its bowl. It might be sticky and soft. If you have one, use a wet dough scraper for this. Grasp a part of the dough, similar to stretching and folding it. Stretch it, but gently and fold it just to the top center. Go ahead round the dough until you've stretched every part once. The goal is to tighten the doughs outer skin.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> After 24 hours of resting the dough
              should have doubled in volume. Now it's ready to get{" "}
              <ExpandButton
                label="kneaded round"
                className="SingleRecipe_Text_InfoButton"
                onClick={() => setExpandInfoKR(!expandInfoKR)}
              />
              .
            </p>
            {expandInfoKR && (
              <p
                className={
                  expandInfoKR
                    ? "SingleRecipe_Text_Info"
                    : "SingleRecipe_Text_Info-collapsed"
                }
              >
                Flour your working surface and hands. Take the dough out of its
                bowl. It might be sticky and soft. If you have one, use a wet
                dough scraper for this. Grasp a part of the dough, similar to
                stretching and folding it. Stretch it, but gently and fold it
                just to the top center. Go ahead round the dough until you've
                stretched every part once. The goal is to tighten the doughs
                outer skin.
                <ExpandButton
                  label="X"
                  className="CloseButton"
                  onClick={() => setExpandInfoKR(!expandInfoKR)}
                />
              </p>
            )}
          </div>
        );
      },
      ordinary: true,
      speltOver30: true,
      ryeOver10: true,
      ryeOver10speltOver30: true,
    },
    {
      content:
        "The dough now matures for one hour in a floured proofing basket or in a bowl lined with a cloth, top down. In the meantime, preheat the oven to 250 °C and a cast-iron pot withit.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: true,
      speltOver30: true,
      ryeOver10: true,
      ryeOver10speltOver30: true,
    },
    {
      content:
        "After that drop the dough into the hot pot with the bottom facing up. Bake it in the closed pot at 230 °C for 45 min. The lid can be removed 10 minutes before the end to get a crispier crust.",
      function: (step, index) => {
        return (
          <div key={index}>
            <p>
              <span>{index + 1}</span> {step}
            </p>
          </div>
        );
      },
      ordinary: true,
      speltOver30: true,
      ryeOver10: true,
      ryeOver10speltOver30: true,
    },
  ];

  function buildArray() {
    let myArray;
    if (totalRatioRyes.ratioValue < 10 && totalRatioSpelts.ratioValue < 30) {
      myArray = steps.filter((step) => step.ordinary === true);
    } else if (
      totalRatioRyes.ratioValue >= 10 &&
      totalRatioSpelts.ratioValue < 30
    ) {
      myArray = steps.filter((step) => step.ryeOver10 === true);
    } else if (
      totalRatioRyes.ratioValue >= 10 &&
      totalRatioSpelts.ratioValue >= 30
    ) {
      myArray = steps.filter((step) => step.ryeOver10speltOver30 === true);
    } else if (
      totalRatioRyes.ratioValue < 10 &&
      totalRatioSpelts.ratioValue >= 30
    ) {
      myArray = steps.filter((step) => step.speltOver30 === true);
    }
    return myArray;
  }

  function recipeText() {
    const myNewArray = buildArray().map((step, index) =>
      step.function(step.content, index)
    );

    return myNewArray;
  }

  function onClick() {
    setIsDeleteButtonClicked(!isDeleteButtonClicked);
  }

  return (
    <div>
      {isDeleteButtonClicked === true && (
        <DeleteRecipePopUp onDelete={onDelete} name={name} onClick={onClick} />
      )}
      <div className={isDeleteButtonClicked ? "SingleRecipe_Blur" : ""}></div>
      <div className="SingleRecipe" id="SingleRecipe">
        <h2 className="SingleRecipe_Headline">{name}</h2>
        <div className="SingleRecipe_Ingredients">
          <RecipeIngredients flours={ingredients} label="" />
        </div>
        <div className="SingleRecipe_Text">{recipeText()}</div>
        <nav className="SingleRecipe_Nav">
          <NavButton label="home" route="/" action="route" />
          <DeleteButton
            name={name}
            savedRecipes={savedRecipes}
            onClick={onClick}
          />
        </nav>
      </div>
    </div>
  );
}
