// String interpolation
let interpolated = `You have ${cart.length} items in your cart`;

let concatenated = 'You have ' + cart.length + ' items in your cart';

// Multiline string
// Still.. looks ugly
let multiline = `line one
                line two`;

let fruit = 'banana';
let color = 'yellow';

// Template interpolated to another template
let phrase = `the ${`big ${color}`} ${fruit}`;

// Multiline in action
function getProductHTML(product) {
    return `
    <div class="product">
        <div class="product-image">
            <img src="${product.image_url}" alt="${product.name}" />
        </div>
        <div class="product-desc">${product.desc}</div>
    </div>
    `;
}


// String templates ARE NOT reusable templates
// they're once used-done

// But, if wrapped in the function (element of reusable object, literally, of course) it can be reusable

let name = 'Talan';

function greet(name) {
    return `Hello, ${name}`;
}

greet(name); // Hello, Talan
greet('Jonathan'); // Hello, Jonathan
