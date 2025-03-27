// Define abstract Interface
interface Button {
    click(): void;
}

interface CheckBox {
    checked(): void;
}

// create specific products
class MacButton implements Button {
    click(): void {
        console.log("Mac Styled Button");
    }
}

class WinButton implements Button {
    click(): void {
        console.log("Windows Styled Button");
    }
}

class MacCheckBox implements CheckBox {
    checked(): void {
        console.log('Mac Styled CheckBox');
    }
}

class WinCheckBox implements CheckBox {
    checked(): void {
        console.log("Windows Styled CheckBox");
    }
}

// create abstract Factory
interface GUIFactory {
    createButton(): Button;
    createCheckBox(): CheckBox;
}

// create specific Factory
class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    };
    createCheckBox(): CheckBox {
        return new MacCheckBox()
    }
}

class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }

    createCheckBox(): CheckBox {
        return new WinCheckBox()
    }
}

// note: this is an identifier for abstract factory
// Client Code
function buildUI(gui: GUIFactory) {
    const button = gui.createButton();
    const checkBox = gui.createCheckBox();

    button.click();
    checkBox.checked();
}

const macUI = new MacFactory();
buildUI(macUI);

const winUI = new WinFactory();
buildUI(winUI);


