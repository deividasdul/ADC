const starVertexShader = `
    uniform float uSize;
    uniform float uTime;

    attribute float aRandom;


    varying vec3 vColor; 

    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        modelPosition.y += sin(uTime * 0.05) * modelPosition.z;
        modelPosition.x += cos(uTime * 0.05) * modelPosition.y; 

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition;
        gl_PointSize = uSize * aRandom;
        gl_PointSize *= (1.0 / - viewPosition.z); 

        vColor = color;
    }
`;

export default starVertexShader;
