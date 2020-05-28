clc
clf
warning('off','all')
close all
beta = [0.02,0.7,0.06];
mu = [0.7,0.1,0.09];
sigma = [0.02,0.3,0.5];
r_0 = [0.1,0.2,0.02];

% term structure T -> y(t,T)
% y(t,T) = -log(p(t,T))/(T - t) 
% where p(t,T) is zero coupon bond price for some model
fprintf('Cox Ingensoll Model\n\n','FontSize',20);
T = linspace(0,1,10);
for i=1:3
    Y = [];
    for j=1:size(T,2)
        Y(j) = CIR(beta(i),mu(i),r_0(i),sigma(i),T(j) ,0);
    end
    figure;
    plot(T,-log(Y)./T,'o-');
    tit = sprintf('Parameter set %d',i);
    xlabel('Maturity');
    ylabel('Yield');
    title(tit,'Interpreter','tex');
end

T = linspace(0.1,1,600);
r_0 = 0.1:0.1:1;
for i=1:3;
    figure; hold on;
    for j=1:size(r_0,2)
        for k=1:size(T,2)
            Y(k) = CIR(beta(i),mu(i),r_0(j),sigma(i),T(k) ,0);
        end
        plot(T,-log(Y)./T);
    end
    tit = sprintf('Parameter set %d',i);
    xlabel('Maturity');
    ylabel('Yield');
    title(tit,'Interpreter','tex');
end
    

function p = CIR(beta,mu,r_0,sigma,T ,t)
gamma = sqrt(beta^2+2*sigma^2);
    x = T-t;
    B = (2*exp(gamma*x)-1)/((gamma+beta)*(exp(gamma*x)-1)+2*gamma);
    A = ((2*gamma*exp((beta+gamma)*(x/2)))/(((gamma+beta)*(exp(gamma*x)-1)+2*gamma)))^(2*beta*mu/(sigma^2));
    p = A*exp(-1*B*r_0);
end



