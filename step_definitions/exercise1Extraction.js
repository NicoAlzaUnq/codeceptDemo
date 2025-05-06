const { I } = inject();

const context = {};

Given('the sentence is {string}', (sentence) => {
    context.sentence = sentence;
});

When('I extract the first number from the sentence', () => {
    const match = context.sentence.match(/\d+/);
    context.extractedNumber = match ? Number(match[0]) : null;
});

Then('the extracted number should be {int}', (expected) => {
    console.log(`Extracted number: ${context.extractedNumber}`);
    if (context.extractedNumber !== expected) {
        throw new Error(`Expected ${expected}, but got ${context.extractedNumber}`);
    }
});
