# 12 Column Grid System

To prevent project bloat, we have adapted our own layout system. The basis of the grid
system within this project is taken from bootstrap 3, adapted to flexbox, written in
stylus, and finally composed into a set of React components.

This grid supports setting only the smallest viewport ruleset and autoscaling unless
there is an another ruleset in a larger viewport. If found, that rule will take over
from its viewport onward.

## Usage
To use, require in the necessary components,

```
import { Row, Col, RowCol } from '../components/layout'
```

## Components
The following React components are available for building out grid based layouts

### Row
Creates a horizontal row to place columns in.

#### Usage
```
<Row rowElement='form' className="myClass"></Row
```

#### Result
```
<form class="row myClass"></form
```

#### Notes
- rowElement defaults to `div` if none is specified.


### Column
Creates a horizontal column. Many columns can be place in a Row.

#### Usage
```
<Col sm={6} lg={4} xsHidden className="myClass"></Col>
```

#### Result
```
<div className="myClass xs-hidden col col-xs-12 col-sm-6 col-lg-4" ></div>
```

#### Notes

- colElement defaults to `div` if none is specified.
- Column sizes should always add up to 12 for each viewport used (viewport being xs, sm, md, lg)


### Row Column
Creates a single row, single container for ease of use.

#### Usage
```
<RowCol rowElement="form" rowClass="something" placeholder="sup" colElement="input" type="text" xs={12} />
```

#### Result
```
<form className="something">
  <input type="text" placeholder="sup" className="col col-xs-12"></>
</form>
```

#### Notes
- supports rowElement and colElement properties.

## Reference
The grid below provides a quick reference for ease of use.

| Property   | Type   | Usage                                                                                        |
|------------|--------|----------------------------------------------------------------------------------------------|
| xs         | int    | xs={12}                                                                                      |
| sm         | int    | sm={12}                                                                                      |
| md         | int    | md={12}                                                                                      |
| lg         | int    | lg={12}                                                                                      |
| xsHidden   | bool   | xsHidden (presence of this property hides element at designated xs viewport                  |
| smHidden   | bool   | smHidden (presence of this property hides element at designated sm viewport                  |
| mdHidden   | bool   | mdHidden   (presence of this property hides element at designated md viewport                |
| lgHidden   | bool   | lgHidden ((presence of this property hides element at lg viewport)                           |
| xsOS       | int    | xsOS={3} (Offsets by 3 columns)                                                              |
| smOS       | int    | smOS={3} Offsets by 3 columns)                                                               |
| mdOS       | int    | mdOS={3} Offsets by 3 columns)                                                               |
| lgOS       | int    | lgOS={3} Offsets by 3 columns)                                                               |
| rowElement | string | dom tag type, defaults to `div`, changing this tag type may result is unexpected css results |
| colElement | string | dom tag type,  defaults `div`, changing this tag type may result is unexpected css results   |
| rowClass   | string | when using <RowCol>, className is only passed to column, so use rowClass to set a row class  |
