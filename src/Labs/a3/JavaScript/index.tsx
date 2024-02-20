import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturns from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";


function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h2>JavaScript</h2>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse />
         <TernaryOperator/>
         <ES5Functions/>
         <ArrowFunctions/>
         <ImpliedReturns/>
         <FunctionParenthesisAndParameters/>
         <WorkingWithArrays/>
         <TemplateLiterals/>
         <House/>
         <Spreading/>
         <Destructing/>
         <FunctionDestructing/>
      </div>
   );
}

export default JavaScript