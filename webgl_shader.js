var webgl_shader = {};
webgl_shader.create_shader = function(gl, str, type)
{
    var shader = gl.createShader(type);
    gl.shaderSource(shader, str);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Error compile shader: "+gl.getShaderInfoLog(shader));
    }
    return shader;
};

webgl_shader.create_program = function(gl, vs, fs)
{
    var v = document.getElementById(vs).textContent;
    var f = document.getElementById(fs).textContent;

    var program = gl.createProgram();
    var vshader = webgl_shader.create_shader(gl, v, gl.VERTEX_SHADER);
    var fshader = webgl_shader.create_shader(gl, f, gl.FRAGMENT_SHADER);
    gl.attachShader(program, vshader);
    gl.attachShader(program, fshader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        alert("Error link program: "+gl.getProgramInfoLog(program));
    }
    return program;
};
