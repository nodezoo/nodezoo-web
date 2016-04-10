To prevent project bloat, we have adapted our own layout system

The usage of the grid system within this project is taken from bootstrap 3,
adapted to flexbox, written in stylus, and final composition is that of a
React Component

### Example Row

```
<Row rowElement='form' className="myClass"></Row

```

Yields

```
<form class="row myClass"></form

```

Nothing special, just to simplify having to type className="row" all the time

Dom Tag defaults to `div` and is optional


Example Column

```<Col sm={6} lg={4} xsHidden className="myClass"></Col>```

Yields

```
<div className="myClass xs-hidden col col-xs-12 col-sm-6 col-lg-4" ></div>

```

However, if don't want to render a `div` and rather another element, `Col` supports the property `colElement` as well

```
<Col colElement=span xs={3}><Col>
```
Yields

```
<span className="col col-xs-3"></span

```

Note: This does support the ability to write

```
<Col xs={6}> </Col>

```

and have it render a 6 column (half page) layout for all viewports, aka, it
starts at smallest viewport ruleset and scales it up to largest unless there is
an another ruleset in a larger viewport, then it will take precedent from its
viewport onward


### Row Column (for simple row ->1 column layout)

```
<RowCol rowElement="form" rowClass="something" placeholder="sup" colElement="input" type="text" xs={12} />
```

Yields

```
<form className="something">
  <input type="text" placeholder="sup" className="col col-xs-12"></>
</form>

```

### Properties

As far as learning the grid system, use this as a reference

[Bootstrap 3](https://getbootstrap.com/examples/grid/)

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
