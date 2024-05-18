function displayContent(section) {
    let content = '';
    
    switch (section) {
        case 'tipos-de-fios':
            content = '<h3>Tipos de Fios</h3><p>Existem vários tipos de fios elétricos, cada um adequado para diferentes aplicações. Os mais comuns são: fio sólido, fio trançado e fio flexível.</p>';
            break;
        case 'disjuntores':
            content = '<h3>Disjuntores</h3><p>Os disjuntores são dispositivos de proteção que interrompem o fluxo de corrente elétrica em caso de sobrecarga ou curto-circuito, protegendo assim a instalação elétrica.</p>';
            break;
        case 'economia':
            content = '<h3>Dicas de Economia</h3><p>Para economizar energia elétrica, use lâmpadas LED, desligue aparelhos eletrônicos quando não estiverem em uso e aproveite a luz natural sempre que possível.</p>';
            break;
    }
    
    document.getElementById('content').innerHTML = content;
}
