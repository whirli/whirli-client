# User Resource

## Available sub resources:
- [Root](###Root)
- [Details](###Details)
- [Subscription](###Subscription)
- [Basket](###Basket)
- [Toybox](###Toybox)

## Example usage:

### **Root:**

| Function call           | Action             |
|-------------------------|--------------------|
| `client.user.create()`  | Create a new user  |

### **Details:**

| Function call                     | Action                                                    |
|-----------------------------------|-----------------------------------------------------------|
| `client.user.details.update()`    | Update a logged in user's details                         |

## **Subscription**
| Function call                       | Action                                                    |
|-------------------------------------|-----------------------------------------------------------|
| `client.user.subscription.create()` | Create a new subscription for a logged in user            |
| `client.user.subscription.update()` | Update a subscription for a logged in user                |
| `client.user.subscription.pay()`    | Pay a subscription for a logged in user                   |

## **Basket**
| Function call                       | Action                                                    |
|-------------------------------------|-----------------------------------------------------------|
| `client.user.basket.getActive()`    | Get a logged in user's active basket                      |
| `client.user.basket.addLine()`      | Add a basketLine to a logged in user's active basket      |
| `client.user.basket.updateLine()`   | Update a basketLine in a logged in user's active basket   |
| `client.user.basket.removeLine()`   | Remove a basketLine from a logged in user's active basket |

## **Toybox**
| Function call                                  | Action                                                    |
|------------------------------------------------|-----------------------------------------------------------|
| `client.user.toybox.designateToyForReturn()`   | Designate a toy for return in a user's toybox             |
| `client.user.toybox.undesignateToyForReturn()` | Un-designate a toy for return in a user's toybox          |
