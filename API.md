# cdktf-construct-projen-template

A projen template for CDKTF constructs authored by HashiCorp (internal use only)

## Compatibility

- `node` >= 18.12.0
- `cdktf` >= 0.18.0
- `constructs` >= 10.0.25

## How to Use

1. Navigate to [github.com/cdktf/construct-projen-template](https://github.com/cdktf/construct-projen-template) using your browser
2. Click on "Use this template" in the top-right of the screen

See [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for full instructions, including screenshots.

Once the repository is created, add the following [GitHub Actions secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository):

- `PROJEN_GITHUB_TOKEN`: should be a Classic, nonexpiring token associated with the [team-tf-cdk](https://github.com/team-tf-cdk) account with the following scopes:
  - `read:user`
  - `repo`
  - `workflow`
- Depending on which language(s)/package manager(s) you'd like to publish to:
  - npm (TypeScript)
    - `NPM_TOKEN`
  - Maven Central (Java)
    - `MAVEN_GPG_PRIVATE_KEY`
    - `MAVEN_GPG_PRIVATE_KEY_PASSPHRASE`
    - `MAVEN_PASSWORD`
    - `MAVEN_USERNAME`
    - `MAVEN_STAGING_PROFILE_ID`
  - PyPI (Python)
    - `TWINE_USERNAME`
    - `TWINE_PASSWORD`
  - NuGet (C#)
    - `NUGET_API_KEY`
  - GitHub (Go)
    - `GO_GITHUB_TOKEN`

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NoopStack <a name="NoopStack" id="cdktf-nodejs-function.NoopStack"></a>

#### Initializers <a name="Initializers" id="cdktf-nodejs-function.NoopStack.Initializer"></a>

```typescript
import { NoopStack } from 'cdktf-nodejs-function'

new NoopStack(scope: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-nodejs-function.NoopStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-nodejs-function.NoopStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdktf-nodejs-function.NoopStack.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-nodejs-function.NoopStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-nodejs-function.NoopStack.addDependency">addDependency</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.allProviders">allProviders</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.dependsOn">dependsOn</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.ensureBackendExists">ensureBackendExists</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.getLogicalId">getLogicalId</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.prepareStack">prepareStack</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.registerIncomingCrossStackReference">registerIncomingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.registerOutgoingCrossStackReference">registerOutgoingCrossStackReference</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.runAllValidations">runAllValidations</a></code> | Run all validations on the stack. |
| <code><a href="#cdktf-nodejs-function.NoopStack.toTerraform">toTerraform</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-nodejs-function.NoopStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdktf-nodejs-function.NoopStack.addDependency"></a>

```typescript
public addDependency(dependency: TerraformStack): void
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="cdktf-nodejs-function.NoopStack.addDependency.parameter.dependency"></a>

- *Type:* cdktf.TerraformStack

---

##### `addOverride` <a name="addOverride" id="cdktf-nodejs-function.NoopStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-nodejs-function.NoopStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-nodejs-function.NoopStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `allProviders` <a name="allProviders" id="cdktf-nodejs-function.NoopStack.allProviders"></a>

```typescript
public allProviders(): TerraformProvider[]
```

##### `dependsOn` <a name="dependsOn" id="cdktf-nodejs-function.NoopStack.dependsOn"></a>

```typescript
public dependsOn(stack: TerraformStack): boolean
```

###### `stack`<sup>Required</sup> <a name="stack" id="cdktf-nodejs-function.NoopStack.dependsOn.parameter.stack"></a>

- *Type:* cdktf.TerraformStack

---

##### `ensureBackendExists` <a name="ensureBackendExists" id="cdktf-nodejs-function.NoopStack.ensureBackendExists"></a>

```typescript
public ensureBackendExists(): TerraformBackend
```

##### `getLogicalId` <a name="getLogicalId" id="cdktf-nodejs-function.NoopStack.getLogicalId"></a>

```typescript
public getLogicalId(tfElement: Node | TerraformElement): string
```

###### `tfElement`<sup>Required</sup> <a name="tfElement" id="cdktf-nodejs-function.NoopStack.getLogicalId.parameter.tfElement"></a>

- *Type:* constructs.Node | cdktf.TerraformElement

---

##### `prepareStack` <a name="prepareStack" id="cdktf-nodejs-function.NoopStack.prepareStack"></a>

```typescript
public prepareStack(): void
```

##### `registerIncomingCrossStackReference` <a name="registerIncomingCrossStackReference" id="cdktf-nodejs-function.NoopStack.registerIncomingCrossStackReference"></a>

```typescript
public registerIncomingCrossStackReference(fromStack: TerraformStack): TerraformRemoteState
```

###### `fromStack`<sup>Required</sup> <a name="fromStack" id="cdktf-nodejs-function.NoopStack.registerIncomingCrossStackReference.parameter.fromStack"></a>

- *Type:* cdktf.TerraformStack

---

##### `registerOutgoingCrossStackReference` <a name="registerOutgoingCrossStackReference" id="cdktf-nodejs-function.NoopStack.registerOutgoingCrossStackReference"></a>

```typescript
public registerOutgoingCrossStackReference(identifier: string): TerraformOutput
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="cdktf-nodejs-function.NoopStack.registerOutgoingCrossStackReference.parameter.identifier"></a>

- *Type:* string

---

##### `runAllValidations` <a name="runAllValidations" id="cdktf-nodejs-function.NoopStack.runAllValidations"></a>

```typescript
public runAllValidations(): void
```

Run all validations on the stack.

##### `toTerraform` <a name="toTerraform" id="cdktf-nodejs-function.NoopStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-nodejs-function.NoopStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-nodejs-function.NoopStack.isStack">isStack</a></code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.of">of</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdktf-nodejs-function.NoopStack.isConstruct"></a>

```typescript
import { NoopStack } from 'cdktf-nodejs-function'

NoopStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-nodejs-function.NoopStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdktf-nodejs-function.NoopStack.isStack"></a>

```typescript
import { NoopStack } from 'cdktf-nodejs-function'

NoopStack.isStack(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-nodejs-function.NoopStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdktf-nodejs-function.NoopStack.of"></a>

```typescript
import { NoopStack } from 'cdktf-nodejs-function'

NoopStack.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktf-nodejs-function.NoopStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-nodejs-function.NoopStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-nodejs-function.NoopStack.property.dependencies">dependencies</a></code> | <code>cdktf.TerraformStack[]</code> | *No description.* |
| <code><a href="#cdktf-nodejs-function.NoopStack.property.synthesizer">synthesizer</a></code> | <code>cdktf.IStackSynthesizer</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-nodejs-function.NoopStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdktf-nodejs-function.NoopStack.property.dependencies"></a>

```typescript
public readonly dependencies: TerraformStack[];
```

- *Type:* cdktf.TerraformStack[]

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdktf-nodejs-function.NoopStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* cdktf.IStackSynthesizer

---





