# React Condom

React Condom is a protective layer around your raw, unprotected components. In a claims based authentication system, a user typically has his own claims and the component can have a rule. This currently is a one to one string equality check. If the rule in a component is available within the rule set (Claims) of the user, the component renders whatever is inside, else it falls back to the fallback component. 

Usage : 
```React
import ReactCondom from 'react-condom';
var ruleSet = ['rule1', 'rule2'];
var componentRule = 'rule1';
<ReactCondom ruleSet={ruleSet} rule={componentRule} fallBack={<div>Access Denied</div>}>
    <div>
        Paid Component
    </div>
<ReactCondom>
```
